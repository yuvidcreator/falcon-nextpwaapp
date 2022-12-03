FROM node:alpine

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install

COPY next.config.js ./next.config.js

COPY package.json yarn.lock tailwind.config.js postcss.config.js tsconfig.json next-env.d.ts .gitignore .eslintrc.json .env.local-example ./

COPY public ./public
COPY styles ./styles
COPY pages ./pages
COPY components ./components
COPY lib ./lib
COPY types ./types

CMD ["yarn", "dev"]