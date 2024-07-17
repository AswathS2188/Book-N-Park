import cv2
import numpy as np
import imutils
import easyocr
import os
# Function to extract number plate from an image
def extract_number_plate(image):
    gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)

    bfilter = cv2.bilateralFilter(gray, 11, 17, 17) # Noise reduction
    edged = cv2.Canny(bfilter, 30, 200) # Edge detection

    keypoints = cv2.findContours(edged.copy(), cv2.RETR_TREE, cv2.CHAIN_APPROX_SIMPLE)
    contours = imutils.grab_contours(keypoints)
    contours = sorted(contours, key=cv2.contourArea, reverse=True)[:10]

    location = None
    for contour in contours:
        approx = cv2.approxPolyDP(contour, 10, True)
        if len(approx) == 4:
            location = approx
            break

    if location is not None:
        mask = np.zeros(gray.shape, np.uint8)
        new_image = cv2.drawContours(mask, [location], 0, 255, -1)
        new_image = cv2.bitwise_and(image, image, mask=mask)

        (x, y) = np.where(mask == 255)
        (x1, y1) = (np.min(x), np.min(y))
        (x2, y2) = (np.max(x), np.max(y))
        cropped_image = gray[x1:x2+1, y1:y2+1]

        reader = easyocr.Reader(['en'])
        result = reader.readtext(cropped_image)
        cv2.imshow("res", cropped_image)
        if result:
            text = result[0][-2]
            return text, location,cropped_image

    return None, None, None

# Function to process the video stream
def process_video_stream():
    cap = cv2.VideoCapture(0)  # Use the default camera
    while True:
        ret, frame = cap.read()
        if not ret:
            continue

        text, location,cropped_image = extract_number_plate(frame)
        if text is not None and location is not None and cropped_image is not None:
            # Draw the number plate on the frame
            font = cv2.FONT_HERSHEY_SIMPLEX
            cv2.putText(frame, text=text, org=(location[0][0][0], location[1][0][1]+60),
                        fontFace=font, fontScale=1, color=(0, 255, 0), thickness=2, lineType=cv2.LINE_AA)
            cv2.rectangle(frame, tuple(location[0][0]), tuple(location[2][0]), (0, 255, 0), 3)
            # Save the frame with the detected number plate
            filename = f"detected_plate_{text}.jpg"
            cv2.imwrite(filename, cropped_image)
            print(f"Detected number plate: {text}. Image saved as {filename}")
            filename1 = f"abc{text}.txt"
            cv2.imwrite(filename1,text)

        cv2.imshow("Frame", frame)
        key = cv2.waitKey(1)
        if key == 27:  # Press Esc to exit
            break

    cap.release()
    cv2.destroyAllWindows()

# Call the function to process the video stream
process_video_stream()