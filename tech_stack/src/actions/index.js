export const selectLibrary = (libraryId) => {
	// action creator
	return {
		type: 'select_library',
		payload: libraryId
	};
};