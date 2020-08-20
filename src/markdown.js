import Markdownit from 'markdown-it';
import katex from 'markdown-it-katex';

const markdown = Markdownit();
markdown.use(katex);

export default markdown;
