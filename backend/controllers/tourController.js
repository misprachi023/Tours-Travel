import Tour from "../models/Tour.js";

// Create a new tour
export const createTour = async (req, res) => {
  const newTour = new Tour(req.body);

  try {
    const savedTour = await newTour.save();
    res
      .status(200)
      .json({ success: true, message: "Successfully created", data: savedTour });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Failed to create. Try again" });
  }
};

// Update a tour
export const updateTour = async (req, res) => {
  const id = req.params.id;

  try {
    const updatedTour = await Tour.findByIdAndUpdate(id, { $set: req.body }, { new: true });
    res
      .status(200)
      .json({ success: true, message: "Successfully updated", data: updatedTour });
  } catch (err) {
    res.status(500).json({ success: false, message: "Failed to update" });
  }
};

// Delete a tour
export const deleteTour = async (req, res) => {
  const id = req.params.id;

  try {
    await Tour.findByIdAndDelete(id);
    res
      .status(200)
      .json({ success: true, message: "Successfully deleted" });
  } catch (err) {
    res.status(500).json({ success: false, message: "Failed to delete" });
  }
};

// Get all tours
export const getAllTour = async (req, res) => {
  try {
    const tours = await Tour.find();
    res
      .status(200)
      .json({ success: true, message: "Successfully retrieved", data: tours });
  } catch (err) {
    res.status(500).json({ success: false, message: "Failed to retrieve" });
  }
};

// Get a single tour
export const getSingleTour = async (req, res) => {
  const id = req.params.id;

  try {
    const tour = await Tour.findById(id);
    if (!tour) {
      return res
        .status(404)
        .json({ success: false, message: "Tour not found" });
    }
    res
      .status(200)
      .json({ success: true, message: "Successfully retrieved", data: tour });
  } catch (err) {
    res.status(500).json({ success: false, message: "Failed to retrieve" });
  }
};
