'use client'
import GitHubIcon from '@mui/icons-material/GitHub';
import MailIcon from '@mui/icons-material/Mail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Link from 'next/link';
export default function Footer() {

    return (
        <>
            <div className=" flex flex-row justify-center items-center gap-4">
                <GitHubIcon fontSize='large'/>
                <Link href="https://github.com/10234567Z">
                    <p className="text-white text-lg">GitHub</p>
                </Link>
            </div>
            <div className=" flex flex-row justify-center items-center gap-4">
                <MailIcon fontSize='large'/>
                <Link href="mailto:sutharharsh291@gmail.com">
                    <p className="text-white text-lg">Mail</p>
                </Link>
            </div>
            <div className=" flex flex-row justify-center items-center gap-4">
                <LinkedInIcon fontSize='large'/>
                <Link href="https://www.linkedin.com/in/harsh-suthar-248610241/">
                    <p className="text-white text-lg">LinkedIn</p>
                </Link>
            </div>
        </>
    )
}