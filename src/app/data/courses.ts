import { Code, Smartphone, BarChart, Database, BookOpen } from "lucide-react";
export const courses = [
  {
    id: 1,
    title: "Google UX Design Professional Certificate",
    category: "Diseño UX",
    platform: "Coursera",
    duration: "6 meses",
    level: "Principiante",
    link: "https://www.coursera.org/professional-certificates/google-ux-design",
    icon: Smartphone,
    color: "bg-pink-100 text-pink-600"
  },
  {
    id: 2,
    title: "Google Data Analytics Certificate",
    category: "Datos",
    platform: "Coursera",
    duration: "6 meses",
    level: "Principiante",
    link: "https://www.coursera.org/professional-certificates/google-data-analytics",
    icon: BarChart,
    color: "bg-blue-100 text-blue-600"
  },
  {
    id: 3,
    title: "Responsive Web Design",
    category: "Desarrollo Web",
    platform: "freeCodeCamp",
    duration: "300 horas",
    level: "Principiante",
    link: "https://www.freecodecamp.org/learn/2022/responsive-web-design/",
    icon: Code,
    color: "bg-emerald-100 text-emerald-600"
  },
  {
    id: 4,
    title: "API Fundamentals",
    category: "Desarrollo Web",
    platform: "freeCodeCamp",
    duration: "2 horas",
    level: "Principiante",
    link: "https://www.freecodecamp.org/news/what-is-an-api/",
    icon: Database,
    color: "bg-purple-100 text-purple-600"
  },
  {
    id: 5,
    title: "Digital Product Management",
    category: "Producto",
    platform: "Coursera",
    duration: "4 meses",
    level: "Principiante",
    link: "https://www.coursera.org/specializations/uva-darden-digital-product-management",
    icon: BookOpen,
    color: "bg-amber-100 text-amber-600"
  }
];