import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const staticDirectory = path.join(process.cwd(), 'static');

export function getDetails(fileName: string) {
    const fullPath = path.join(staticDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);
    return matterResult;
}

export function getMenu() {
    const menuDir = path.join(staticDirectory, 'landing_page/menu');
    const fileNames = fs.readdirSync(menuDir);
    return fileNames.map(fileName => fileName.replace(/\.md$/, ''));
}

export function getTestimonials() {
    const testimonialsDir = path.join(staticDirectory, 'landing_page/testimonials');
    const fileNames = fs.readdirSync(testimonialsDir);
    return fileNames.map(fileName => fileName.replace(/\.md$/, ''));
}

