

export interface OnboardingItem {
  id: number;
  title: string;
  subtitle: string;
  image: any;
}

export const onboardingData: OnboardingItem[] = [
  {
    id: 1,
    title: "Search Job Easier and More Effective",
    subtitle: "Make your experience of searching job more easier and more effective",
    image: require("@/assets/images/Illustration.png"),
  },
  {
    id: 2,
    title: "Apply for job anywhere & anytime",
    subtitle: "Jobfil makes you can apply for job from anywhere and anytime",
    image: require("@/assets/images/Illustration.png"),
  },
  {
    id: 3,
    title: "Help Find the Right Job With Your Desire",
    subtitle: "Jobfil can help you find the right job with your desire",
    image: require("@/assets/images/Illustration.png"),
  },
];
