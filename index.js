
        // Function to fetch images from the Pexels API and display them
        const submitBtn = document.getElementById("submitBtn");
        submitBtn.addEventListener("click", function()
        {
        const mainTxt = document.getElementById('mainTxt')
        const searchPic = document.getElementById("searchPic").value;
        const numOfPic = document.getElementById("numOfPic").value;
          async function fetchAndDisplayImages() {
            try {
              const apiKey =
                "kzKplfWKGdJ2kvJpdKm3DqCp42FEqotcRHtfStZozw3qnbJnoumclaKx";
              // const query = "Nature";
              // const per_page = 5; Number of images to fetch

              const response = await axios.get(
                `https://api.pexels.com/v1/search?query=${searchPic}&per_page=${numOfPic}`,
                {
                  headers: {
                    Authorization: apiKey,
                  },
                }
              );

              const imageContainer = document.getElementById("imageContainer");
              if (
                response.data && response.data.photos && response.data.photos.length > 0) {
                // Clear previous images and texts if any
                imageContainer.innerHTML = ""; mainTxt.remove();


                // Loop through the fetched photos and create and display image elements for each photo
                response.data.photos.forEach((photo) => {
                  const imageUrl = photo.src.medium; // I can use different sizes like 'original', 'large2x', 'large', 'medium', 'small', etc.
                
                  const imgDiv = document.createElement("div");
                  imgDiv.classList.add("imgDiv");
                  imgDiv.classList.add("col-md-4");

                  const htmlData = `<img src=${imageUrl} alt="img" width="500px", height="500px"/>`;
                  imgDiv.insertAdjacentHTML("afterbegin", htmlData);

                  // Append the image element to the image container
                   imageContainer.appendChild(imgDiv);
                });
              } else {
                // If no photo is found, display a default message
                imageContainer.textContent = "No images found.";
              }
            } catch (error) {
              console.error("Error fetching images:", error);
            }
          }

          // Call the function to fetch and display the images
          fetchAndDisplayImages();
        });