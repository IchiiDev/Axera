module.exports = {
    DEFAULT_THEME: "white", // White is the default theme in ./config/themes, set to the name of the theme file you want to be default.
    ADMIN_USER: ["root"], // Add usernames you want to access admin privileges.
    CREATE_USER_ENDPOINT: true, // Leave true if you want to set the user create endpoint with public access (/!\ Anyone will be able to register new users).
    APP_PORT: 3000 // Do not touch unless this port is already in use on your side.
}