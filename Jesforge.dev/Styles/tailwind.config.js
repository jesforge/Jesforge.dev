/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        '../**/*.razor',
        'mappings/*.map'
    ],
    theme: {},
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography')
    ],
}
