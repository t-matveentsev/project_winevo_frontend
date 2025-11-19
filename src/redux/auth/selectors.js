export const selectUser = (state) => state.auth.user;
export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectIsRefreshing = (state) => state.auth.isRefreshing;
export const selectRole = (state) => state.auth.user.role;
export const selectLoading = (state) => state.auth.loading;
export const selectFavorites = (state) => state.auth.user.favorites;
export const selectFavoriteIds = (state) => state.auth.user.favoriteIds;
