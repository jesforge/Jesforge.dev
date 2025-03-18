/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        '../**/*.razor',
        'mappings/*.map'
    ],
    theme: {
        extend: {
            animation: {
                'shimmer': 'shimmer 2s linear infinite',
            }
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography')
    ],
}
