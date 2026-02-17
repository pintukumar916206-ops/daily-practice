
import { Bookmark } from "lucide-react";
import Card from "./components/Card";

const App = () => {


  const jobOpenings = [
  {
    brandLogo: "https://images.unsplash.com/photo-1743168624828-5de6eb24a2ce?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    companyName: "Google",
    datePosted: "2 days ago",
    tag1: "Full-time",
    tag2: "Junior Level",
    pay: 45,
    location: "Patna, India",
    applicant: "Naruto Uzumaki"
  },
  {
    brandLogo: "https://images.unsplash.com/photo-1664464168934-637a185dea7e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    companyName: "Meta",
    datePosted: "5 days ago",
    tag1: "Full-time",
    tag2: "Senior Level",
    pay: 70,
    location: "Patna, India",
    applicant: "Tony Stark (Iron Man)"
  },
  {
    brandLogo: "https://images.unsplash.com/photo-1665042099439-39d93c1117e6?q=80&w=1156&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    companyName: "Amazon",
    datePosted: "1 day ago",
    tag1: "Part-time",
    tag2: "Junior Level",
    pay: 38,
    location: "Patna, India",
    applicant: "Izuku Midoriya (Deku)"
  },
  {
    brandLogo: "https://images.unsplash.com/photo-1663035047598-c36c3c4c291d?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ",
    companyName: "Apple",
    datePosted: "3 days ago",
    tag1: "Full-time",
    tag2: "Senior Level",
    pay: 80,
    location: "Patna, India",
    applicant: "Bruce Wayne (Batman)"
  },
  {
    brandLogo: "https://logo.clearbit.com/netflix.com",
    companyName: "Netflix",
    datePosted: "7 days ago",
    tag1: "Full-time",
    tag2: "Senior Level",
    pay: 90,
    location: "Patna, India",
    applicant: "Gojo Satoru"
  },
  {
    brandLogo: "https://logo.clearbit.com/microsoft.com",
    companyName: "Microsoft",
    datePosted: "4 days ago",
    tag1: "Full-time",
    tag2: "Junior Level",
    pay: 50,
    location: "Patna, India",
    applicant: "Peter Parker (Spider-Man)"
  },
  {
    brandLogo: "https://logo.clearbit.com/tesla.com",
    companyName: "Tesla",
    datePosted: "6 days ago",
    tag1: "Part-time",
    tag2: "Senior Level",
    pay: 85,
    location: "Patna, India",
    applicant: "Goku"
  },
  {
    brandLogo: "https://logo.clearbit.com/nvidia.com",
    companyName: "NVIDIA",
    datePosted: "2 days ago",
    tag1: "Full-time",
    tag2: "Senior Level",
    pay: 88,
    location: "Patna, India",
    applicant: "Doctor Strange"
  },
  {
    brandLogo: "https://logo.clearbit.com/oracle.com",
    companyName: "Oracle",
    datePosted: "5 days ago",
    tag1: "Full-time",
    tag2: "Junior Level",
    pay: 42,
    location: "Patna, India",
    applicant: "Levi Ackerman"
  },
  {
    brandLogo: "https://logo.clearbit.com/salesforce.com",
    companyName: "Salesforce",
    datePosted: "1 day ago",
    tag1: "Part-time",
    tag2: "Senior Level",
    pay: 65,
    location: "Patna, India",
    applicant: "Wanda Maximoff (Scarlet Witch)"
  }
];
console.log(jobOpenings);


  
  return (
    <div className="parent">
      {jobOpenings.map(function(elem){
        return <Card company={elem.applicant} datePosted={elem.datePosted} tag1={elem.tag1} brandLogo={elem.brandLogo} pay={elem.pay} tag2={elem.tag2} />
      })}
      

    </div>
  );
};

export default App;
