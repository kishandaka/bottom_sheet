import {Item} from '@/components/Card/Card'
import {useNavigation} from '@react-navigation/native'
import {useRef, useState} from 'react'

const DATA = [
  {
    title: 'Travel Blog: Exploring Kyoto',
    description:
      'Kyoto, Japan’s cultural heart, offers a mesmerizing blend of tradition and modernity. Walking through the narrow alleys of Gion feels like stepping into a time machine—geishas in elegant kimonos, centuries-old tea houses, and the subtle sound of shamisen in the air. The Fushimi Inari Shrine, with its thousands of vermilion torii gates, creates a dreamlike tunnel through the forested mountain. Arashiyama’s bamboo grove is equally enchanting, especially during early morning when the sunlight pierces through the dense bamboo shoots. Kyoto isn’t just visually stunning—it’s deeply spiritual, calm, and immersive. Whether it’s sipping matcha in a traditional ceremony or enjoying kaiseki dining, the experience is as rich culturally as it is visually. Each street corner reveals another story, a hidden shrine, or a whisper from the past.' // ~500 chars
  },
  {
    title: 'In-Depth Guide: The Evolution and Future of Mobile App Development',
    description: `Mobile app development has undergone a tremendous transformation over the past two decades. What began as simple utility tools in the early 2000s has evolved into sophisticated, AI-powered, cross-platform ecosystems that power nearly every facet of our lives. From ordering food and booking rides to remote work and social networking, mobile applications have become the digital backbone of modern society. This comprehensive guide explores the journey, current trends, challenges, and future outlook of mobile development in detail.
  
  **1. The Early Days (2000–2010)**  
  The era began with Java ME and Symbian OS dominating early mobile phones. Applications were rudimentary, often pre-installed by OEMs and designed for tasks like calendar management, SMS, or basic games like Snake. Development was device-specific, and the lack of standardization made it hard for apps to scale.
  
  The major shift came in 2007 when Apple introduced the iPhone. With it, iOS brought a revolutionary multitouch interface and an intuitive user experience. In 2008, Apple launched the App Store, and Google followed with Android Market (now Google Play Store). These platforms democratized app distribution and introduced SDKs and APIs that empowered developers globally.
  
  **2. Rise of Native App Development (2010–2015)**  
  By this period, native development using Objective-C (iOS) and Java (Android) was the gold standard. Developers appreciated the ability to leverage device-specific APIs, leading to smooth UI performance, direct access to sensors, and reliable security features.
  
  However, challenges soon emerged:
  - **Time & Cost**: Developing and maintaining two codebases (iOS and Android) was expensive.
  - **Talent Specialization**: Teams needed distinct skill sets for each platform.
  - **App Fragmentation**: Especially with Android, different screen sizes and OS versions complicated QA processes.
  
  **3. Cross-Platform Revolution (2015–2020)**  
  To solve the dual-codebase problem, new cross-platform frameworks gained popularity:
  - **React Native (by Facebook)**: Launched in 2015, React Native allowed developers to write JavaScript code that compiles to native UI components. It promised near-native performance and a single codebase for iOS and Android.
  - **Flutter (by Google)**: Released in 2017, Flutter introduced Dart as a programming language and used a custom rendering engine. It became famous for its rich widget library and blazing-fast performance.
  - **Xamarin (by Microsoft)**: Enabled C# developers to build cross-platform apps using .NET.
  
  These frameworks significantly reduced development time and costs, and brought native-like experiences within reach for startups and enterprises alike.
  
  **4. Mobile DevOps & CI/CD Practices**  
  With growing complexity, the importance of CI/CD pipelines increased. Tools like Bitrise, GitHub Actions, and Fastlane allowed automated testing, build generation, and deployment. Firebase Crashlytics helped monitor runtime issues, while tools like Sentry tracked performance and errors.
  
  **5. Modern Trends (2020–2024)**  
  - **Super Apps**: Inspired by platforms like WeChat, super apps bundle multiple services (chat, payments, booking) into one. Examples include Paytm and Tata Neu.
  - **PWAs**: Progressive Web Apps emerged as an alternative to traditional apps, running in browsers with offline support, push notifications, and installability.
  - **AI Integration**: AI-powered features like voice assistants, chatbots, and recommendation engines became standard.
  - **Privacy First**: With regulations like GDPR and Apple’s App Tracking Transparency, user data privacy became a core design requirement.
  
  **6. Tooling and Ecosystem Enhancements**  
  - **Metro & Hermes (React Native)**: Improved JS bundling and execution speed.
  - **Jetpack Compose (Android)**: A modern UI toolkit for native Android apps.
  - **SwiftUI (Apple)**: Simplified UI building on iOS using declarative code.
  - **Expo (React Native)**: Eased development and testing without native code configuration.
  - **Firebase, Supabase, and AWS Amplify**: Offered scalable backends, auth, real-time DBs, and more.
  
  **7. Design Systems & UI/UX Best Practices**  
  Modern mobile development emphasizes accessibility, motion design, and system-wide theming. Tools like Figma, Zeplin, and Storybook helped developers collaborate with designers more effectively.
  
  - **Dark mode support** is now expected.
  - **Adaptive layouts** for foldable and large-screen devices are increasingly important.
  - **Accessibility standards (WCAG)** are no longer optional for enterprise apps.
  
  **8. Testing & QA**  
  Testing has matured from manual QA to automated end-to-end testing using:
  - **Detox** (React Native)
  - **Appium**
  - **Espresso (Android)**
  - **XCTest (iOS)**
  
  Combined with snapshot testing, unit tests, and performance benchmarks, modern testing ensures reliability across devices.
  
  **9. Challenges Faced Today**  
  - **Device Fragmentation**: Android developers still struggle with OS version differences and hardware inconsistencies.
  - **Battery Optimization**: Managing background tasks and permissions responsibly is crucial.
  - **Network Resilience**: Offline-first design and caching mechanisms are necessary in low-bandwidth areas.
  - **Third-party SDK bloat**: Many apps suffer from poor performance due to unnecessary SDKs.
  
  **10. The Future (2024 and Beyond)**  
  - **AI-Native Development**: With tools like GitHub Copilot, CodeWhisperer, and GPT-4, developers can write, debug, and document code faster than ever.
  - **Voice and Gesture Interfaces**: As wearables and smart glasses grow, gesture and voice-driven interfaces will become standard.
  - **Foldables & AR-Ready Apps**: Developers must now consider flexible layouts and 3D rendering for AR.
  - **Quantum-safe Encryption**: As quantum computing advances, new encryption standards will be required to protect user data.
  - **More Automation**: From test writing to component generation, AI will automate even more of the dev lifecycle.
  
  **Conclusion**  
  Mobile app development is in a golden age, with powerful tools, frameworks, and platforms available to developers at all levels. The shift from native-only to cross-platform-first has allowed for faster iterations and broader reach. However, the responsibilities have also grown—privacy, accessibility, and user experience must be prioritized.
  
  Staying ahead means constant learning, adopting modern practices, and being prepared to adapt to emerging tech like AI, AR, and edge computing. For developers, it’s an exciting time to build—and for users, it’s a great time to experience what's possible in the palm of their hand.`
  },
  {
    title: 'Tech Article: The Rise of Edge Computing',
    description:
      "Edge computing is revolutionizing the way data is processed by bringing computation closer to data sources, significantly reducing latency and improving response times. This decentralized model enables real-time analytics, which is crucial for applications like autonomous vehicles, remote healthcare monitoring, and smart manufacturing systems. Unlike traditional cloud computing, where data must travel long distances to data centers, edge computing processes data locally at the network’s edge, offering faster decision-making capabilities. Moreover, it helps alleviate bandwidth strain and enhances privacy by minimizing data transmission. As IoT devices proliferate, the need for low-latency, high-efficiency data processing continues to grow. With major tech giants investing in edge infrastructure, we're entering a new era where intelligent services will be faster, more secure, and highly responsive to user contexts." // ~800 chars
  },
  {
    title: 'Case Study: Revamping an E-Commerce Platform',
    description:
      'Our team was tasked with redesigning and optimizing a large-scale e-commerce platform suffering from poor performance, low conversion rates, and outdated UI/UX. The project began with stakeholder interviews and analytics audits to identify core bottlenecks—long load times, broken checkout flows, and inconsistent product categorization. We adopted a mobile-first design strategy using Figma and transitioned the frontend to React with server-side rendering for performance gains. Backend APIs were rebuilt in Node.js, and we integrated ElasticSearch for faster product searches. The checkout process was streamlined to just three steps, which significantly reduced cart abandonment. We also implemented an A/B testing framework to continuously iterate on design and feature improvements. Post-deployment, the platform saw a 38% increase in user engagement, a 22% boost in conversions, and a 40% improvement in average page load time. This transformation demonstrated the impact of collaborative, user-focused design and robust technical execution on business outcomes.' // ~1000 chars
  },
  {
    title: 'Sunset Memories',
    description:
      'Captured during my last trip to Goa. The sky was filled with vibrant orange and pink hues.'
  },
  {
    title: 'Meeting Notes',
    description: `Discussed Q2 targets, performance metrics, and client feedback. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham`
  },
  {
    title: 'Grocery List',
    description: 'Milk, bread, eggs, cheese, spinach, tomatoes, rice, lentils, olive oil.'
  },
  {
    title: 'Project: Aurora UI',
    description:
      'This project focuses on creating a dynamic and responsive design system using Tailwind CSS and React. The key goals are modularity, reusability, and accessibility.'
  },
  {
    title: 'Morning Motivation',
    description: 'You are doing better than you think.'
  },
  {
    title: 'Birthday Reminder',
    description: "Don't forget Ria’s birthday on July 15th. Buy a gift and send her a message!"
  },
  {
    title: 'Code Snippet: Fetch API',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  },
  {
    title: 'Fitness Tracker',
    description: 'Steps: 10,432\nCalories Burned: 507\nWorkout: 45 mins yoga and 20 mins cardio.'
  },
  {
    title: 'Weekend Plan',
    description:
      'Visit the local art exhibition, try the new Japanese restaurant, and spend Sunday organizing the workspace.'
  },
  {
    title: 'Book Summary: Atomic Habits',
    description:
      'James Clear emphasizes the power of small habits and how they compound over time. The core idea is to focus on identity-based habits—becoming the type of person who naturally embodies the change you seek. It’s not about setting goals; it’s about building systems that lead to success.'
  }
]

const CATEGORY = [
  {title: 'Trending'},
  {title: 'Recent'},
  {title: 'Recommended'},
  {title: 'Top Picks'},
  {title: 'New Arrivals'},
  {title: 'Popular'},
  {title: 'Saved Items'},
  {title: 'For You'},
  {title: 'Continue Watching'},
  {title: 'Recently Viewed'}
]

const useHomeScreen = () => {
  const [isModalShow, setModalShow] = useState(false)
  const [selectedItem, setSelectedItem] = useState<Item>()

  const onPressItem = (item: any) => {
    setSelectedItem(item)
    setTimeout(() => {
      setModalShow(true)
    }, 200)
  }

  const onCloseModal = () => {
    setModalShow(false)
  }

  return {DATA, CATEGORY, isModalShow, selectedItem, onCloseModal, onPressItem}
}

export default useHomeScreen
