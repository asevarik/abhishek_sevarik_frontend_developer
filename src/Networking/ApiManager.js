import axios from "axios";

// Reusable function for making API calls
export const fetchData = async (apiEndpoint) => {
    try {
        // Make the API call using Axios
        const response = await axios.get(apiEndpoint);

        // Return the data from the response
        return response.data;
    } catch (error) {
        // Return the error if the API call fails
        return { error: error.message };
    }
};