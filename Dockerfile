FROM node:18.16.0

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install
RUN npx playwright install-deps
RUN npx playwright install chromium

COPY . .

CMD ["npm", "test"]