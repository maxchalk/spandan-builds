import Section from '@/components/Section';
import {
    FaJava, FaPython, FaReact, FaAngular, FaNodeJs, FaDocker,
    FaGitAlt, FaJira, FaSlack, FaAws
} from 'react-icons/fa';
import {
    SiGo, SiJavascript, SiTypescript, SiCplusplus, SiC,
    SiMysql, SiRedux, SiNextdotjs, SiSpringboot, SiSpring,
    SiHibernate, SiExpress, SiJenkins, SiKubernetes,
    SiTerraform, SiAnsible, SiElastic, SiPostgresql,
    SiOracle, SiMongodb, SiNeo4J,
    SiRedis, SiConfluence
} from 'react-icons/si';
import { TbSql, TbApi } from 'react-icons/tb';
import { DiMsqlServer } from 'react-icons/di';

const skillCategories = [
    {
        title: 'Programming Languages',
        skills: [
            { name: 'Java', icon: <FaJava className="text-orange-500" /> },
            { name: 'Go', icon: <SiGo className="text-blue-400" /> },
            { name: 'Python', icon: <FaPython className="text-yellow-500" /> },
            { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" /> },
            { name: 'TypeScript', icon: <SiTypescript className="text-blue-500" /> },
            { name: 'C++', icon: <SiCplusplus className="text-blue-600" /> },
            { name: 'C', icon: <SiC className="text-zinc-500" /> },
            { name: 'SQL', icon: <TbSql className="text-zinc-600" /> },
        ],
    },
    {
        title: 'Frontend',
        skills: [
            { name: 'ReactJS', icon: <FaReact className="text-cyan-400" /> },
            { name: 'AngularJS', icon: <FaAngular className="text-red-500" /> },
            { name: 'Redux', icon: <SiRedux className="text-purple-500" /> },
            { name: 'Next.js', icon: <SiNextdotjs className="text-black" /> },
        ],
    },
    {
        title: 'Backend Frameworks',
        skills: [
            { name: 'Spring Boot', icon: <SiSpringboot className="text-green-500" /> },
            { name: 'Spring MVC', icon: <SiSpring className="text-green-600" /> },
            { name: 'JPA/Hibernate', icon: <SiHibernate className="text-amber-600" /> },
            { name: 'REST APIs', icon: <TbApi className="text-zinc-500" /> },
            { name: 'Node.js', icon: <FaNodeJs className="text-green-500" /> },
            { name: 'Express.js', icon: <SiExpress className="text-zinc-800" /> },
        ],
    },
    {
        title: 'DevOps & Cloud',
        skills: [
            { name: 'Jenkins', icon: <SiJenkins className="text-red-600" /> },
            { name: 'Docker', icon: <FaDocker className="text-blue-500" /> },
            { name: 'Kubernetes', icon: <SiKubernetes className="text-blue-600" /> },
            { name: 'Terraform', icon: <SiTerraform className="text-purple-600" /> },
            { name: 'Ansible', icon: <SiAnsible className="text-black" /> },
            { name: 'ELK Stack', icon: <SiElastic className="text-teal-500" /> },
        ],
    },
    {
        title: 'Databases',
        skills: [
            { name: 'PostgreSQL', icon: <SiPostgresql className="text-blue-400" /> },
            { name: 'MySQL', icon: <SiMysql className="text-blue-600" /> },
            { name: 'Oracle', icon: <SiOracle className="text-red-500" /> },
            { name: 'SQL Server', icon: <DiMsqlServer className="text-red-600" /> },
            { name: 'MongoDB', icon: <SiMongodb className="text-green-500" /> },
            { name: 'Neo4js', icon: <SiNeo4J className="text-blue-500" /> },
            { name: 'Redis', icon: <SiRedis className="text-red-500" /> },
        ],
    },
    {
        title: 'Tools & Workflow',
        skills: [
            { name: 'Git', icon: <FaGitAlt className="text-orange-500" /> },
            { name: 'Jira', icon: <FaJira className="text-blue-500" /> },
            { name: 'Confluence', icon: <SiConfluence className="text-blue-600" /> },
            { name: 'Slack', icon: <FaSlack className="text-purple-500" /> },
        ],
    },
];

export default function SkillsSection() {
    return (
        <Section
            id="skills"
            title="Skills"
            subtitle="My technical toolkit."
        >
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {skillCategories.map((group) => (
                    <div key={group.title} className="space-y-4">
                        <h3 className="text-sm font-bold text-zinc-400 uppercase tracking-widest pl-1">
                            {group.title}
                        </h3>
                        <div className="flex flex-wrap gap-3">
                            {group.skills.map((skill) => (
                                <div
                                    key={skill.name}
                                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-zinc-200 bg-white hover:border-zinc-300 hover:shadow-sm transition-all group"
                                >
                                    <span className="text-lg transition-transform group-hover:scale-110">{skill.icon}</span>
                                    <span className="text-sm font-medium text-zinc-700">{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
}
