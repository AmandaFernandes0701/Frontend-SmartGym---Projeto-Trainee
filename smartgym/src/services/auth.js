export const TOKEN_KEY = "@smartgym-Token";
export const USER_ID = "@smartgym-userid";
export const isAuthenticated = () => sessionStorage.getItem(TOKEN_KEY) !== null;
export const getToken = () => sessionStorage.getItem(TOKEN_KEY);
export const getID = () => sessionStorage.getItem(USER_ID);

export const login = (data) => {
    sessionStorage.setItem(TOKEN_KEY, data.acessToken);
    sessionStorage.setItem(USER_ID, data.user[0].user_id);
};
export const logout = () => {
    sessionStorage.removeItem(TOKEN_KEY);
    sessionStorage.removeItem(USER_ID);
};
