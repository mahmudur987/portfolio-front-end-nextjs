import EducationPage from "@/components/Education/Education";
import ExperiencePage from "@/components/Experience/Experience";
import MyAbility from "@/components/MyAbility/MyAbility";
import SkillsPage from "@/components/Skills/Skills";

const Resume = () => {
  return (
    <div>
      <div className="flex justify-end">
        <a
          href="https://drive.google.com/file/d/1ww1abUz_t6yV3ByvlZ-9k_W3SI_LUyoB/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          <button className="btn btn-info my-6">Download Resume </button>
        </a>
      </div>
      <div
        id="divToPrint"
        className=" hidden"
        style={{
          backgroundColor: "#f5f5f5",
          width: "210mm",
          minHeight: "297mm",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        {/* <div>Note: Here the dimensions of div are same as A4</div>  */}
        <div className="p-2 border border-black mx-auto">
          {/* <Image className="rounded-lg  " src={picture} alt="" /> */}
        </div>
      </div>

      <div className="container mx-auto w-full flex flex-col gap-10 md:gap-20 lg:gap-30">
        <div>
          <SkillsPage />
        </div>
        <div>
          <EducationPage />
        </div>
        <div>
          <ExperiencePage />
        </div>
        <div>
          <MyAbility />
        </div>
      </div>
    </div>
  );
};

export default Resume;
