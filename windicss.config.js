import {defineConfig} from 'windicss/helpers';

export default defineConfig({
    prefixer: false,
    preflight: false,
    extract: {
        include: ['./index.html', './**/*.css'],
    },
});
