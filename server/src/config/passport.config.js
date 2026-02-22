import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import User from "../models/user.model.js";

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_REDIRECT_URI,
    },
    async (_accessToken, _refreshToken, profile, done) => {
      try {
        const email = profile.emails?.[0].value;
        const displayName = profile.displayName;
        const avatar = profile.photos?.[0].value;
        const googleId = profile.id;

        let user = await User.findOne({ googleId });

        if (user) return done(null, user);

        if (email) {
          user = await User.findOne({ email });
          if (user) {
            user.googleId = googleId;
            user.displayName = displayName;
            user.avatar = avatar;
            await user.save();
            return done(null, user);
          }
        }

        const newUser = await User.create({
          email,
          googleId,
          displayName,
          avatar,
        });
        return done(null, newUser);
      } catch (error) {
        return done(error, null);
      }
    }
  )
);

export default passport;
