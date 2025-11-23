import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import React from "react";

const job = {
  id: 1,
  title: "Senior UX Designer",
  company: "Google",
  logo: require("../../assets/google.png"),
  location: "Berlin, Germany",
  tags: ["Design", "Full Time", "In House"],
  description: "We are looking for a Senior UX Designer...",
  requirements: [
    "Create UI/UX strategies",
    "Develop prototypes & wireframes",
    "Strong communication skills",
    "Team collaboration"
  ],
  companyInfo: [
    { icon: require("@/assets/images/Image.png"), label: "Website", value: "www.google.com" },
    { icon: require("@/assets/images/Image.png"), label: "Headquarters", value: "California, USA" },
    { icon: require("@/assets/images/Image.png"), label: "Founded", value: "1998" },
    { icon: require("@/assets/images/Image.png"), label: "Size", value: "100,000 employees" },
  ],
};

export default job;