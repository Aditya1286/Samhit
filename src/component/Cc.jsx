import React from "react"
import { CardCarousel } from "./ui/swipper.jsx"
import { useTranslation } from "react-i18next"

const CardCarouselDemo = () => {
  const { t } = useTranslation();
  
  // To avoid hook issues, get the array from translations or map keys
  const translatedCards = t('cc.cards', { returnObjects: true });
  
  const images = [
    { 
      src: "https://i.pinimg.com/1200x/36/e4/0a/36e40a094ae3b4ec4a8ebbf10b41acf8.jpg", 
      alt: "Overthinking",
      title: translatedCards[0]?.title || "Overthinking & Racing Thoughts",
      description: translatedCards[0]?.description || "When your mind won't stop analyzing every situation, creating endless worry loops that drain your energy."
    },
    { 
      src: "https://i.pinimg.com/736x/e4/a9/e8/e4a9e8ffd23780c8291f5507e6c6b196.jpg", 
      alt: "Loneliness",
      title: translatedCards[1]?.title || "Feeling Isolated & Alone",
      description: translatedCards[1]?.description || "The heavy weight of loneliness, even when surrounded by people, feeling disconnected and misunderstood."
    },
    { 
      src: "https://i.pinimg.com/736x/d1/1f/9e/d11f9e7137d569eab6d9668463968a95.jpg", 
      alt: "Anxiety",
      title: translatedCards[2]?.title || "Anxiety & Panic Attacks",
      description: translatedCards[2]?.description || "The overwhelming rush of fear and physical symptoms that make everyday situations feel impossible to handle."
    },
    { 
      src: "https://i.pinimg.com/1200x/c1/68/93/c16893236668b0ef825ab455034de52d.jpg", 
      alt: "Depression",
      title: translatedCards[3]?.title || "Depression & Low Mood",
      description: translatedCards[3]?.description || "The persistent sadness and emptiness that makes it hard to find joy or motivation in daily activities."
    },
    { 
      src: "https://i.pinimg.com/736x/b0/8b/8f/b08b8f78e640810204c916d3fa55c35e.jpg", 
      alt: "Self Doubt",
      title: translatedCards[4]?.title || "Self-Doubt & Low Self-Worth",
      description: translatedCards[4]?.description || "The critical inner voice that questions your abilities and worth, holding you back from reaching your potential."
    }
  ]

  return (
    <div className="w-full">
      <CardCarousel
        images={images}
        autoplayDelay={3000}
        showPagination={true}
        showNavigation={true}
      />
    </div>
  )
}

export default CardCarouselDemo