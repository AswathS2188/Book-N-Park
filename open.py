from tkinter import Image
import cv2
import easyocr

# Load an image using OpenCV
image = cv2.imread('example.jpg', cv2.IMREAD_GRAYSCALE)

# Check if the image was successfully loaded
if image is None:
    print("Error: Could not open or find the image.")
    exit()
img_path = "example.jpg"
img = Image.open(img_path)    
with open("save.txt", "w") as text_file:
    reader = easyocr.Reader(['en'])
    result = reader.readtext(img)
    for (bbox, text, prob) in result:
        if prob >= 0.5:
            # display 
            print(f'Detected text: {text} (Probability: {prob:.2f})')
            text_file.write(f"{str(text)}\n")
    text_file.close()

# Open a text file for writing
output_file = open('output.txt', 'w')

# Write pixel values to the text file
rows, cols = image.shape
for i in range(rows):
    for j in range(cols):
        pixel_value = image[i, j]
        output_file.write(f"{pixel_value} ")
    output_file.write("\n")

# Close the text file
output_file.close()

print("Data has been written to output.txt.")
