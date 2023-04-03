import React from "react"
import ImageSlider, { Slide } from "react-auto-image-slider"

export default function Home(){
    return<>
    <ImageSlider effectDelay={500} autoPlayDelay={2000}>
      <Slide>
        <img alt="img2" src="https://img.freepik.com/premium-psd/polo-tshirt-mockup-front-view_373676-78.jpg" />
      </Slide>
      <Slide>
        <img alt="img2" src="https://media.istockphoto.com/id/999671278/photo/shirt-design-and-people-concept-close-up-of-young-man-and-woman-in-blank-white-t-shirt-isolated.jpg?s=170667a&w=0&k=20&c=X2-TLWo1ZwpcXsSbY5ZUPO985yc51z7fCfzXpprGQGw=" />
      </Slide>
      <Slide>
        <img alt="img1" src="https://rukminim1.flixcart.com/image/612/612/xif0q/shirt/d/z/u/xxl-313-keythong-original-imagg7dsbzehkrgg.jpeg?q=70" />
      </Slide>
    </ImageSlider>
    </>
}