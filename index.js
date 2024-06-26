const bodyParser = require("body-parser");
const express = require("express");
const dbConnect = require("./config/dbConnect");
const {notFound, errorHandler} = require("./middlewares/errorHandler");
const app = express();
const dotenv = require("dotenv").config();
//const PORT = 3300;
const PORT = process.env.PORT;
const AdminUserRouter = require("./routes/AdminUserRoute");
const JobRouter = require("./routes/JobsRoute");
const CompaniesRouter = require("./routes/CompaniesRoute");
const CandidateRoute = require("./routes/CandidateRoute");
const CarrierRoute = require("./routes/CarrierRoute");
const CitiesRoute = require("./routes/CitiesRoute");
const LocationRoute = require("./routes/LocationRoute");
const CMSRoute = require("./routes/CMSRoute");
const CMSContentRoute = require("./routes/CMSContentRoute");
const BlogRoute = require("./routes/BlogRoute");
const SEORoute = require("./routes/SEORoute");
const FAQSRoute = require("./routes/FAQSRoute");
const VideosRoute = require("./routes/VideosRoute");
const SliderRoute = require("./routes/SliderRoute");
const TestimonalsRoute = require("./routes/TestimonialsRoute");
const BlogCategoryRoute = require("./routes/BlogCategoryRoute");
const IndustriesRoute = require("./routes/IndustriesRoute");
const CountriesRoute = require("./routes/CountriesRoute");
const CurrenciesRoute = require("./routes/CurrenciesRoute");
const DegreeLevelRoute = require("./routes/DegreeLevelRoute");
const DegreeTypeRoute = require("./routes/DegreeTypeRoute");
const ResultTypeRoute = require("./routes/ResultTypeRoute");
const OwnershipTypeRoute = require("./routes/OwnershipTypeRoute");
const MaritalStatusRoute = require("./routes/MaritalStatusRoute");
const PositionRoute = require("./routes/PositionRoute");
const MajorSubjectRoute = require("./routes/MajorSubjectRoute");
const FunAreaRoute = require("./routes/FunAreaRoute");
const GenderRoute = require("./routes/GenderRoute");
const JobExpRoute = require("./routes/JobExpRoute");
const JobShiftRoute = require("./routes/JobShiftRoute");
const JobSkillsRoute = require("./routes/JobSkillsRoute");
const JobTypeRoute = require("./routes/JobTypeRoute");
const JobsCategoriesRoute = require("./routes/JobCategoriesRoute");
const SalaryPeriodRoute = require("./routes/SalaryPeriodRoute");
const StatesRoute = require("./routes/StatesRoute");
const LanguageRoute = require("./routes/LanguageRoute");
const LanguageLevelRoute = require("./routes/LanguageLevelRoute");

const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const cors = require("cors");

dbConnect();
app.use(morgan("dev"));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/front/user", AdminUserRouter);
app.use("/front/candidate", CandidateRoute);
app.use("/front/carrier", CarrierRoute);
app.use("/front/company", CompaniesRouter);
app.use("/front/cities", CitiesRoute);
app.use("/front/location", LocationRoute);
app.use("/front/cms-content", CMSContentRoute);
app.use("/front/cms", CMSRoute);
app.use("/front/blog", BlogRoute);
app.use("/front/seo", SEORoute);
app.use("/front/faqs", FAQSRoute);
app.use("/front/video", VideosRoute);
app.use("/front/slider", SliderRoute);
app.use("/front/testimonial", TestimonalsRoute);
app.use("/front/blog-category", BlogCategoryRoute);
app.use("/front/countries", CountriesRoute);
app.use("/front/industry", IndustriesRoute);
app.use("/front/currency", CurrenciesRoute);
app.use("/front/major-subject", MajorSubjectRoute);
app.use("/front/degree-level", DegreeLevelRoute);
app.use("/front/degree-type", DegreeTypeRoute);
app.use("/front/result-type", ResultTypeRoute);
app.use("/front/gender", GenderRoute);
app.use("/front/ownership-type", OwnershipTypeRoute);
app.use("/front/marital-status", MaritalStatusRoute);
app.use("/front/position", PositionRoute);
app.use("/front/functional-area", FunAreaRoute);
app.use("/front/job-experience", JobExpRoute);
app.use("/front/job-shift", JobShiftRoute);
app.use("/front/job-skills", JobSkillsRoute);
app.use("/front/job-type", JobTypeRoute);
app.use("/front/job-category", JobsCategoriesRoute);
app.use("/front/salary-period", SalaryPeriodRoute);
app.use("/front/states", StatesRoute);
app.use("/front/jobs", JobRouter);
app.use("/front/language", LanguageRoute);
app.use("/front/language-level", LanguageLevelRoute);


app.use(notFound);
app.use(errorHandler);
app.listen(PORT, () => {
  console.log(`Server is running  at PORT http://localhost:${PORT}`);
});
