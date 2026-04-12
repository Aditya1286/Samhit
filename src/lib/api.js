export const fetchAssessmentQuestions = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        // Depression indicators (PHQ-9 derived)
        { 
          id: 1, category: "depression", weight: 1.2,
          question: "Over the past two weeks, how often have you felt down, depressed, or completely hopeless?", 
          options: [{ text: "Not at all", score: 0 }, { text: "Several days", score: 1 }, { text: "More than half the days", score: 2 }, { text: "Nearly every day", score: 3 }] 
        },
        { 
          id: 2, category: "depression", weight: 1.0,
          question: "How often have you experienced little interest or pleasure in doing things you previously enjoyed?", 
          options: [{ text: "Not at all", score: 0 }, { text: "Several days", score: 1 }, { text: "More than half the days", score: 2 }, { text: "Nearly every day", score: 3 }] 
        },
        // Anxiety indicators (GAD-7 derived)
        { 
          id: 3, category: "anxiety", weight: 1.2,
          question: "How often have you felt overwhelmingly anxious, nervous, or constantly on edge?", 
          options: [{ text: "Not at all", score: 0 }, { text: "Several days", score: 1 }, { text: "More than half the days", score: 2 }, { text: "Nearly every day", score: 3 }] 
        },
        { 
          id: 4, category: "anxiety", weight: 1.0,
          question: "How often have you been unable to stop or control a cycle of intense worrying?", 
          options: [{ text: "Not at all", score: 0 }, { text: "Several days", score: 1 }, { text: "More than half the days", score: 2 }, { text: "Nearly every day", score: 3 }] 
        },
        // Somatic / Physical markers
        { 
          id: 5, category: "somatic", weight: 0.8,
          question: "Are your physical energy levels drastically irregular? (e.g., severe fatigue, insomnia, or overeating consistently)", 
          options: [{ text: "Never", score: 0 }, { text: "Rarely", score: 1 }, { text: "Frequently", score: 2 }, { text: "Almost Everyday", score: 3 }] 
        },
        // Cognitive Puzzle 1 - Focus & Pattern Recognition
        { 
          id: 6, category: "cognitive", weight: 1.5, type: "puzzle",
          question: "Which pattern correctly completes the logical sequence? [A, C, F, J, ...]", 
          options: [{ text: "M", score: 2 }, { text: "O", score: 0 }, { text: "N", score: 1 }, { text: "My mind feels too chaotic to focus on this currently", score: 3 }] 
        },
        // Image-based Emotion Recognition
        { 
          id: 7, category: "emotional", weight: 1.5, type: "image",
          imageUrl: "https://images.unsplash.com/photo-1541199249251-f713e6145474?w=600&auto=format&fit=crop&q=60",
          question: "Observe this abstract imagery. Without overthinking, which emotional state describes your immediate resonance with this visual?", 
          options: [{ text: "Clarity & Calmness", score: 0 }, { text: "Slight Tension", score: 1 }, { text: "Deep Sadness", score: 2 }, { text: "Overwhelming Chaos / Panic", score: 3 }] 
        },
        // Social Resilience
        { 
          id: 8, category: "social", weight: 1.0,
          question: "Have you found yourself actively withdrawing from your friends or avoiding social obligations recently?", 
          options: [{ text: "No, I am socially active", score: 0 }, { text: "Only when I'm tired", score: 1 }, { text: "Yes, quite often", score: 2 }, { text: "I have completely isolated myself", score: 3 }] 
        },
        // NEW Cognitive Check
        {
          id: 9, category: "cognitive", weight: 1.2, type: "puzzle",
          question: "Focus Check: If a train leaves at 3:15 PM and the journey takes exactly 45 minutes, what time does it arrive?",
          options: [{ text: "4:00 PM", score: 0 }, { text: "3:45 PM", score: 2 }, { text: "4:15 PM", score: 1 }, { text: "I can't focus enough right now to calculate this", score: 3 }]
        },
        // NEW self-image (Depression PHQ-9)
        {
          id: 10, category: "depression", weight: 1.0,
          question: "How often do you feel bad about yourself — or that you are a failure or have let yourself or your family down?",
          options: [{ text: "Not at all", score: 0 }, { text: "Several days", score: 1 }, { text: "More than half the days", score: 2 }, { text: "Nearly every day", score: 3 }]
        },
        // NEW anxiety specific (GAD-7)
        { 
          id: 11, category: "anxiety", weight: 1.2,
          question: "How often do you feel intensely afraid, as if something awful might happen suddenly without warning?", 
          options: [{ text: "Not at all", score: 0 }, { text: "Several days", score: 1 }, { text: "More than half the days", score: 2 }, { text: "Nearly every day", score: 3 }] 
        },
        // NEW somatic focus
        { 
          id: 12, category: "somatic", weight: 1.0,
          question: "Have you experienced unexplainable physical symptoms lately, such as tension headaches, stomach issues, or muscle aches?", 
          options: [{ text: "Never", score: 0 }, { text: "Rarely", score: 1 }, { text: "Often", score: 2 }, { text: "Almost constantly", score: 3 }] 
        },
        // NEW Image puzzle
        { 
          id: 13, category: "emotional", weight: 1.5, type: "image",
          imageUrl: "https://images.unsplash.com/photo-1518241353330-0f7941c2d1b5?w=600&auto=format&fit=crop&q=60", 
          question: "Look at this vast, quiet landscape. Does looking at this image make you feel more grounded or more detached?", 
          options: [{ text: "Completely grounded / Peaceful", score: 0 }, { text: "A bit detached", score: 1 }, { text: "Very detached / Numb", score: 2 }, { text: "Anxious / Small", score: 3 }] 
        },
        // NEW social mask
        { 
          id: 14, category: "social", weight: 1.2,
          question: "Do you feel like you have to 'wear a mask' or fake your emotions when interacting with others?", 
          options: [{ text: "Never / I am authentic", score: 0 }, { text: "Occasionally", score: 1 }, { text: "Most of the time", score: 2 }, { text: "Constantly", score: 3 }] 
        },
        // NEW restlessness
        { 
          id: 15, category: "anxiety", weight: 1.0,
          question: "How often do you find it hard to sit still because you feel agitated or restless?", 
          options: [{ text: "Not at all", score: 0 }, { text: "Several days", score: 1 }, { text: "More than half the days", score: 2 }, { text: "Nearly every day", score: 3 }] 
        },
        // Critical marker - keeping it last explicitly
        { 
          id: 16, category: "critical", weight: 3.5,
          question: "Have you entertained persistent thoughts that you would be better off removed from the world, or considered hurting yourself?", 
          options: [{ text: "Never", score: 0 }, { text: "A passing thought rarely", score: 1 }, { text: "Sometimes, it feels like an option", score: 2 }, { text: "Yes, frequently and heavily", score: 3 }] 
        }
      ]);
    }, 1500); 
  });
};
