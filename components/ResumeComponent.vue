<template>
  <div class="resume d-md-flex d-block">
    <div class="resume-left-box p-8">
      <div class="d-flex jc-center">
        <img class="resume-img d-flex jc-center my-4" src="../static/resume.jpg" width="250" height="273">
      </div>
      <h1 class="my-4">Davydov Maksim</h1>

      <div class="w-100">
        <h3>Frontend developer</h3>
        <hr>
        <div class="p-4">
          <ParagraphResume class="my-4" title="Address" subtitle="Vologda"/>
          <ParagraphResume class="my-4" title="Phone" subtitle="+7 (900) 551-26-75"/>
          <ParagraphResume class="my-4" title="Email" subtitle="dovlin.m@gmail.com"/>
          <ParagraphResume class="my-4" title="GitHub" subtitle="https://github.com/dovlin-m"/>
        </div>
      </div>

      <div class="w-100">
        <h3>About me</h3>
        <hr>
        <p class="fs-14 p-4">
          В поиске работы в компании с открытой культурой общения,
          возможностью профессионального роста и совершенствования
          <br><br>
          Готов к переезду или удаленной работе
          <br><br>
          В свободное время развиваю навыки разработки, а также занимаюсь музыкой и спортом
        </p>
      </div>
    </div>

    <div class="resume-right-box p-8">
      <div class="w-100 mt-4">
        <h3>Technologies</h3>
        <hr>
      </div>

      <ul class="d-flex flex-wrap p-4">
        <li class="mx-4 mb-2">JavaScript</li>
        <li class="mx-4 mb-2">TypeScript</li>
        <li class="mx-4 mb-2">Vue.js</li>
        <li class="mx-4 mb-2">Vuex</li>
        <li class="mx-4 mb-2">Nuxt.js</li>
        <li class="mx-4 mb-2">Vue-Router</li>
        <li class="mx-4 mb-2">Vuetify</li>
        <li class="mx-4 mb-2">Bootstrap</li>
        <li class="mx-4 mb-2">SASS</li>
        <li class="mx-4 mb-2">CSS 3</li>
        <li class="mx-4 mb-2">HTML</li>
      </ul>

      <div class="w-100">
        <h3>Education</h3>
        <hr>
        <div class="p-4">
          <p class="fs-14 text-right">2019 - 2022</p>
          <ParagraphResume class="my-2" title="ВоГУ" subtitle="Промышленное и гражданское строительство" />
          <p class="fs-14 text-right">2021 - 2022</p>
          <ParagraphResume class="my-2" title="Hexlet" subtitle="Проходил курчы Frontend разработчика и верстальщика" />
        </div>
      </div>

      <div class="w-100">
        <h3>Projects</h3>
        <hr>
        <div class="p-4">
          <p class="mb-2 fs-14">На данный момент реализовал несколько самостоятельных проектов, подробнее о них:</p>
          <ul class="mx-4">
            <li>
              <p class="mb-2">April</p>
              <a href="https://github.com/dovlin-m/test-task-april" class="project-link fs-14">
                GitHub
              </a>
              <p class="mt-2">Получение данных с API, типизация на TypeScript, стор на vuex, пагинация, поиск по данным элемента, преключение отображения элементов список/блоки, библиотека Vuetify, также Nuxt.js</p>
            </li>
            <li>
              <p class="mb-2 mt-4">Wb-delivery</p>
              <a href="https://github.com/dovlin-m/wb-delivery" class="project-link fs-14">
                GitHub
              </a>
              <p class="mt-2">Страница доставки товаров</p>
            </li>
            <li>
              <p class="mb-2 mt-4">Weather widget</p>
              <a href="https://github.com/dovlin-m/weather-widget" class="project-link fs-14">
                GitHub
              </a>
              <p class="mt-2">Виджет погоды, получение данных с openweather, drop&drap, запись в localStorage</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import ParagraphResume from "./ParagraphResume";
export default {
  name: "ResumeComponent",
  components: {
    ParagraphResume
  }
}
</script>

<style lang="scss">
.resume {
  margin-top: 32px;
  margin-bottom: 16px;

  .resume-left-box {
    margin-left: auto;
    margin-right: auto;
    max-width: 340px;
    background: #272727;

    .resume-img {
      border-radius: 2px;
    }
  }

  .resume-right-box {
    width: 100%;
    background: #424242;

    .project-link {
      color: rgb(33, 150, 243);
      text-decoration: none;
    }
  }
}

@media (max-width: 768px) {
  .resume {
    background: #272727;
    .resume-left-box {
     padding-bottom: 0;
    }
    .resume-right-box {
      padding-top: 0;
      width: 340px;
      background: #272727;
    }
  }
}

@media (max-width: 600px) {
  .resume {
    width: 100%;

    .resume-right-box {
      padding: 0  32px 32px;
      margin-left: auto;
      margin-right: auto;
      width: auto;
    }
  }
}
</style>
