import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

export default {
  content: [
    './src/**/*.{html,ts,css}',
    './public/**/*.html'
  ],
  safelist: [
    // Common utilities used in @apply
    'fixed', 'absolute', 'relative', 'block', 'flex', 'inline-block',
    'w-full', 'h-full', 'min-h-[250px]', 'h-auto', 'p-7.5', 'px-9', 'py-3',
    'bg-white', 'bg-black', 'bg-slate-300', 'bg-white/20', 'bg-black/20',
    'rounded-[20px]', 'rounded-b-[50%_20px]', 'rounded-full', 'rounded-2.5', 'rounded-3.75',
    'text-center', 'text-left', 'text-white', 'text-4xl', 'text-3xl', 'text-sm', 'text-xs',
    'font-black', 'font-bold', 'font-medium', 'uppercase',
    'transition-all', 'transition-transform', 'duration-300', 'duration-400', 'duration-500',
    'ease-in-out', 'ease-smooth', 'ease-out',
    'opacity-100', 'opacity-90',
    'shadow-lg', 'shadow-xl', 'shadow-2xl', 'shadow-md',
    'overflow-hidden', 'overflow-hidden',
    'scale-110', 'scale-100', 'scale-105', 'hover:scale-105', 'hover:scale-110',
    'hover:shadow-2xl', 'hover:opacity-30', 'hover:opacity-100', 'hover:bg-white',
    'inset-0', 'top-8', 'right-8', '-top-1/2', '-left-1/2',
    'z-10', 'z-0', 'z-[1000]', 'z-[9999]',
    'justify-center', 'items-center', 'justify-between',
    'rounded-lg', 'rounded-3xl', 'rounded-2xl', 'rounded-full', 'rounded-[30%_70%_70%_30%/30%_30%_70%_70%]',
    'border', 'border-2', 'border-white/20',
    'inline-flex', 'items-center', 'justify-center',
    'mr-2.5', 'mb-2.5', 'mb-3.75', 'mb-7.5',
    'px-3', 'py-1', 'px-6',
    'text-green-500', 'text-red-500',
    'pb-10', 'pt-5', 'pl-6',
    'gap-4', 'gap-6', 'gap-8',
    'backdrop-blur-sm', 'backdrop-blur-md', 'backdrop-blur-xl',
    'drop-shadow-sm',
    'line-clamp-2',
    'whitespace-nowrap',
    'rotate-[10deg]', 'rotate-90',
    'drop-shadow', 'mr-auto',
    'gradient-to-br', 'from-blue-500', 'to-blue-900',
    'animate-slide-in', 'animate-float', 'animate-float-slow', 'animate-spin-slow',
    'animate-bounce-slow', 'animate-scale-down', 'animate-fade-in'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #4247a1, #3368fa, #1e2171)',
        'gradient-to-br': 'linear-gradient(to bottom right, var(--tw-gradient-stops))',
      },
      animation: {
        'slide-in': 'slideIn 0.25s ease-out forwards',
        'float': 'float 3.5s ease-in-out infinite',
        'float-slow': 'float-slow 4.5s ease-in-out infinite',
        'spin-slow': 'spin-slow 10s linear infinite',
        'bounce-slow': 'bounce-slow 4s ease-in-out infinite',
        'scale-down': 'scaleDown 3s ease-in-out infinite',
        'fade-in': 'fadeIn 0.3s ease-in-out',
      },
      keyframes: {
        slideIn: {
          'from': { opacity: '0', transform: 'translateY(0)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        scaleDown: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(0.95)' },
        },
        fadeIn: {
          'from': { opacity: '0' },
          'to': { opacity: '1' },
        },
      },
      spacing: {
        '2.5': '0.625rem',
        '3.75': '0.9375rem',
        '7.5': '1.875rem',
      },
    },
  },
  plugins: [
    plugin(function({ addUtilities }) {
      addUtilities({
        '.bg-gradient-primary': {
          background: 'linear-gradient(135deg, #4247a1, #3368fa, #1e2171)',
        },
        '.ease-smooth': {
          transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
        },
      });
    }),
  ],
} satisfies Config;
