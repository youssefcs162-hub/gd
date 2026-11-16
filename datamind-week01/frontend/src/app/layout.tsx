import type {Metadata} from 'next';
import {ModeAndRoleProvider} from '@/context/ModeAndRoleContext';
import './globals.css';
export const metadata:Metadata={title:'DataMind AI | Workspace',description:'An evidence-first workspace for autonomous data science.'};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="en"><body><ModeAndRoleProvider>{children}</ModeAndRoleProvider></body></html>}
