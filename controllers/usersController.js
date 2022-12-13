const User = require('../models/User')
const Note = require('../models/Note')
const asyncHandler = require('express-async-handler')
const bcrypt = require('bcrypt')

// @desc Get all users
// @route GET /users
// @access Private
const getAllUsers = asyncHandler(async(req, res) => {
  
})

// @desc Create all users
// @route POST /users
// @access Private
const createNewlUser = asyncHandler(async(req, res) => {
  
})

// @desc Update a user
// @route PATCH /users
// @access Private
const updatelUser = asyncHandler(async(req, res) => {
  
})

// @desc Delete a user
// @route DELETE /users
// @access Private
const deleteUser = asyncHandler(async(req, res) => {
  
})

module.exports = {
  getAllUsers,
  createNewlUser,
  updatelUser,
  deleteUser
}



