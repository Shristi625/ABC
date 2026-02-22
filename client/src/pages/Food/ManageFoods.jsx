import React, { useState, useEffect } from "react";
import {
  getAllFoods,
  createFood,
  updateFood,
  deleteFood,
} from "../../services/food";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./ManageFoods.css";

const ManageFoods = () => {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingFood, setEditingFood] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    type: "Street Food",
    priceCategory: "Affordable",
    price: "",
    image: "",
  });
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  useEffect(() => {
    fetchFoods();
  }, []);

  const fetchFoods = async () => {
    try {
      setLoading(true);
      const response = await getAllFoods();
      setFoods(response.data.data);
    } catch (error) {
      console.error("Failed to fetch foods:", error);
      alert("Failed to load foods");
    } finally {
      setLoading(false);
    }
  };

  const handleOpenModal = (food = null) => {
    if (food) {
      setEditingFood(food);
      setFormData({
        name: food.name,
        description: food.description,
        type: food.type,
        priceCategory: food.priceCategory,
        price: food.price,
        image: food.image,
      });
      setImagePreview(food.image);
    } else {
      setEditingFood(null);
      setFormData({
        name: "",
        description: "",
        type: "Street Food",
        priceCategory: "Affordable",
        price: "",
        image: "",
      });
      setImagePreview(null);
    }
    setImageFile(null);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingFood(null);
    setImageFile(null);
    setImagePreview(null);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();
      data.append("name", formData.name);
      data.append("description", formData.description);
      data.append("type", formData.type);
      data.append("priceCategory", formData.priceCategory);
      data.append("price", formData.price);

      if (imageFile) {
        data.append("image", imageFile);
      } else if (formData.image) {
        data.append("image", formData.image);
      }

      if (editingFood) {
        await updateFood(editingFood._id, data);
        alert("Food updated successfully!");
      } else {
        await createFood(data);
        alert("Food created successfully!");
      }

      handleCloseModal();
      fetchFoods();
    } catch (error) {
      console.error("Failed to save food:", error);
      alert(error.response?.data?.message || "Failed to save food");
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this food?")) {
      try {
        await deleteFood(id);
        alert("Food deleted successfully!");
        fetchFoods();
      } catch (error) {
        console.error("Failed to delete food:", error);
        alert(error.response?.data?.message || "Failed to delete food");
      }
    }
  };

  return (
    <div className="manage-foods-page">
      <Header />

      <div className="container manage-foods-content">
        <div className="manage-header">
          <h1>Manage Foods</h1>
          <button onClick={() => handleOpenModal()} className="add-food-btn">
            + Add New Food
          </button>
        </div>

        {loading ? (
          <div className="loading-state">Loading foods...</div>
        ) : (
          <div className="foods-table">
            <table>
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Type</th>
                  <th>Price</th>
                  <th>Price Category</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {foods.map((food) => (
                  <tr key={food._id}>
                    <td>
                      <img
                        src={food.image}
                        alt={food.name}
                        className="food-thumbnail"
                      />
                    </td>
                    <td>{food.name}</td>
                    <td>{food.type}</td>
                    <td>NPR {food.price}</td>
                    <td>{food.priceCategory}</td>
                    <td>
                      <button
                        onClick={() => handleOpenModal(food)}
                        className="edit-btn"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(food._id)}
                        className="delete-btn"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>{editingFood ? "Edit Food" : "Add New Food"}</h2>
              <button onClick={handleCloseModal} className="close-btn">
                ✕
              </button>
            </div>

            <form onSubmit={handleSubmit} className="food-form">
              <div className="form-group">
                <label>Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="e.g., Momos"
                />
              </div>

              <div className="form-group">
                <label>Description *</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  rows="4"
                  placeholder="Describe the food..."
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Type *</label>
                  <select
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                  >
                    <option value="Street Food">Street Food</option>
                    <option value="Traditional">Traditional</option>
                    <option value="Cultural">Cultural</option>
                    <option value="Snack">Snack</option>
                    <option value="Dessert">Dessert</option>
                    <option value="Main Course">Main Course</option>
                    <option value="Beverage">Beverage</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Price Category *</label>
                  <select
                    name="priceCategory"
                    value={formData.priceCategory}
                    onChange={handleChange}
                  >
                    <option value="Budget">Budget</option>
                    <option value="Affordable">Affordable</option>
                    <option value="Moderate">Moderate</option>
                    <option value="Expensive">Expensive</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label>Price (NPR) *</label>
                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  required
                  min="0"
                  placeholder="e.g., 150"
                />
              </div>

              <div className="form-group">
                <label>Image</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="file-input"
                />
                {imagePreview && (
                  <div className="image-preview">
                    <img src={imagePreview} alt="Preview" />
                  </div>
                )}
                <small>Or provide an image URL:</small>
                <input
                  type="url"
                  name="image"
                  value={formData.image}
                  onChange={handleChange}
                  placeholder="https://example.com/image.jpg"
                />
              </div>

              <div className="form-actions">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="cancel-btn"
                >
                  Cancel
                </button>
                <button type="submit" className="submit-btn">
                  {editingFood ? "Update Food" : "Create Food"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default ManageFoods;
