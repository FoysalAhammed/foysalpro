import React from 'react'
import ProjectCard from "@/components/ProjectCard";
import { dummyData } from "@/constants";
export const dynamic = 'force-dynamic';
export const dynamicParams = true;
export const revalidate = 0;
const AllProducts = () => {
    const dataa = dummyData;
  return (
        <section className="flexStart flex-col  paddings mb-16 ">
      <section className="projects-grid  ">
                { 
         dataa.projects.map((datas) => (
            <ProjectCard
            key={datas.id}
            id={datas.id}
            image={datas?.image}
            title={datas?.title}
            name={"Foysal Ahammed"}
            avatarUrl="/profile01.jpg"
            userId={""}
          />
         ))
       }
      </section>
    </section>
    

  )
}

export default AllProducts