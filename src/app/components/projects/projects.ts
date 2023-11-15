import {AssetsManager} from "app/shared/resources/assets_manager";

export interface IProjects {
  id?: number,
  name: string,
  url: string,
  img: string,
  description: string,
}

var assetsManager = AssetsManager
export const PROJECTS: IProjects[] = [
  {
    id: 1,
    name: "HR System",
    url: null,
    img: assetsManager.hr,
    description: "Create full structure pattern for HR project, create reusable and dynamic  functions, like store employee information and support various humanresource functions, such as benefits, payroll, recruiting, training, financial,attendance, self Service, org structure, employees structure, etc."
  },

  {
    id: 2,
    name: "Schools Managements",
    url: "https://schoolsystem.cloudiax.com",
    img: assetsManager.school,
    description: "Dashboard system platform that managed E-schools."
  },

  {
    id: 3,
    name: "Mozakrety",
    url: "https://mozakrety.com",
    img: assetsManager.mozakrety,
    description: "A massive E-learning system platform that managed educational centers with their students, teachers and coursessystem integrated with many payment methods and integrated with cloud servers have more security integrated with zoomus for live videos."
  },

  {
    id: 4,
    name: "OGSET",
    url: "https://ogset.co",
    img: assetsManager.ogset,
    description: "Specialized E-exams to prepare people to work in the oil field.\n" +
      "Intelligent system generate different exams that not allow repeat questions.\n" +
      "\n" +
      "Integrated with many payment methods."
  },

  {
    id: 5,
    name: "Egypt-Training",
    url: "https://trainingmisrangular.cloudiax.com",
    img: assetsManager.EGYTraining,
    description: "Manage online Training for Employees of organization.\n" + "System integrated with HR Systems.\n" +
      "Integrated with cloud servers have more security."
  },
  {
    id: 6,
    name: "Online Courses",
    url: "https://trainingmisrangular.cloudiax.com",
    img: assetsManager.ksa_courses,
    description: "A massive E-COURSES system platform that managed online Courses."
  },

  {
    id: 7,
    name: "Kw Oxford",
    url: "https://trainingmisrangular.cloudiax.com",
    img: assetsManager.kw_oxford,
    description: "تهدف بشكل فعال إلى تسهيل عملية التعليم بين المتعلم والمعلم وايجاد سبل التعاون بين ولي الأمر والطالب  مساعدة ولي الأمر في شرح وحل الواجبات\n" +
      "الدخول المباشر من خلال المنصة لشرح النقاط الصعبة فى الدرس\n" +
      "(اختبارات أسبوعية واختبارات قصيرة) يتم إرسالها للطالب من خلال المنصة ويتم تصحيحها وإعادة إرسالها\n" +
      "كورس لغة ثابت إنجليزية عام  للمراحل الابتدائية والمتوسطة يشمل محادثات وقواعد تهدف لتقوية اللغة عند الطالب معلم ومعلمة قرآن كريم حصص أسبوعية ثابتة "
  },
  // {
  //   id: 8,
  //   name: "ZH-Transportation",
  //   url: "https://trainingmisrangular.cloudiax.com",
  //   img: assetsManager.zhTransportation,
  //   description: "Dashboard for transportation app."
  // },

]
