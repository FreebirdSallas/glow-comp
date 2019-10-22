import axios from 'axios';

export default {
  // Gets all users
  getUsers: function () {
    return axios.get ('/api/users');
  },
  // Gets the user with the given id
  getUser: function (id) {
    return axios.get ('/api/users/' + id);
  },
  // Deletes the user with the given id
  deleteUser: function (id) {
    return axios.delete ('/api/users/' + id);
  },
  // Creates a new user
  saveUser: function (userData) {
    return axios.post ('/api/users', userData);
  },
  //gets all events from db
  getEvents: function () {
    return axios.get ('/api/events');
  },
  getEvent: function (id) {
    return axios.get ('/api/events/' + id);
  },
  getUserEvent: function (id) {
    return axios.get ('/api/events/user/' + id);
  },

  loginUser: function (userPlusPass) {
    return axios.post ('/auth/user/login', userPlusPass);
  },
  isLoggedIn: function () {
    return axios.get ('/auth/user');
  },
  createEvent: function (eventData) {
    return axios.post ('/api/events', eventData);
  },
  logUserOut: function () {
    return axios.post ('/auth/user/logout');
  },
};
