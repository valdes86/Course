function catchErrors(error, displayError){
    let errorMsg;

    if(error.response){
        // The request was made and the server responded with a status code outside 2xx
        errorMsg = error.response.data
        console.error("Error response", errorMsg)

        // For cloudinary image uploads
        if(error.response.data.error){
            errorMsg = error.response.data.error
        }
    } else if (error.request) {
        //The request was made but no response was received
        errorMsg = error.request
        console.error("Error request", errorMsg)
    } else {
        //something else happend
        errorMsg = error.message
        console.error("Error message", errorMsg)
    }

    displayError(errorMsg);
}

export default catchErrors