<template>
  <div class="w-full">
    <BaseSection class="pt-8">
      <div class=" flex gap-8 items-center md:flex-row flex-col">
        <div class="md:w-1/2">
          <h2
            class="md:text-4xl text-2xl font-semibold leading-tight tracking-wider text-gray-900"
          >
            Телеграм канал о способах заработка на криптовалюте и создании
            пассивного дохода
            <br />
            с помощью TradeBot
          </h2>
          <BaseButton class="my-6 px-12 flex items-center">
            Перейти
          </BaseButton>
        </div>
        <a class="md:w-1/2">
          <img src="../assets/images/illustration_01.jpg" alt="Hero Image" />
        </a>
      </div>

      <div class="mt-8 py-6 w-full rounded-lg shadow-lg">
        <div
          class="flex items-center justify-around md:divide-x-2 md:flex-row flex-col"
        >
          <HeroCard
            class="w-1/3 h-24 text-center mb-6"
            v-for="(item, idx) in heroItems"
            :key="idx"
          >
            <div>
              <h4 class="text-lg text-gray-800 font-bold tracking-wider">
                {{ item.title }}
              </h4>
              <p class="text-sm text-gray-600 font-medium tracking-wider">
                {{ item.subtitle }}
              </p>
            </div>
          </HeroCard>
        </div>
      </div>
    </BaseSection>

    <!-- <BaseSection class="mt-12 w-full md:flex-row flex-col flex items-center justify-between md:w-xl">
      <div class="md:w-1/2">
        <img src="../assets/images/illustration_02.jpg" alt="Feature" />
      </div>
      <div class="md:w-1/2 px-24">
        <SeactionHeader
          title="Наши преимущества"
        />

        <List class="mt-8 space-y-4">
          <ListItem
            class="text-sm font-medium text-gray-600 leading-none tracking-wider"
            v-for="feature in featuresList"
            :key="feature"
          >
            <span class="mr-4">
              <svg
                class="w-6 h-6 text-green-600"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </span>
            {{ feature }}
          </ListItem>
          <BaseButton class="mt-6 px-12">Узнать больше</BaseButton>
        </List>
      </div>
    </BaseSection> -->

    <div>
      <BaseSection
        class="my-12 w-full text-center bg-white rounded-xl shadow-2xl py-5"
      >
        <SeactionHeader
          class="py-4 items-center m-auto"
          title="Подключим бота бесплатно на пробный период!"
        />
        <br />
        <BaseButton class="mt-5">Узнать больше</BaseButton>
      </BaseSection>
    </div>

    <div class="bg w-full my-40 py-16 bg-no-repeat bg-cover">
      <BaseSection
        class="my-12 w-full text-center bg-white rounded-xl shadow-2xl py-5"
      >
        <div class="text-center flex items-center justify-center">
          <SeactionHeader title="Команда TradeBot">
            <template #subtitle>
              Разработчики - профессиональная команда трейдеров, торгующая не
              только на криптовалюте, но и на
              <strong>CME</strong>,<strong>МБ</strong>.
            </template>
          </SeactionHeader>
        </div>
      </BaseSection>
    </div>

    <BaseSection class="mt-16 w-full">
      <!-- <div class="text-center flex items-center justify-center">
        <SeactionHeader
          title="Отзывы наших клиентов"
        />
      </div> -->

      <div class="mt-12">
        <!-- <Slider :options="sliderOptions">
          <CustomerCard
            class="mx-6 w-1/3 h-48 border hover:border-blue-600"
            v-for="(customer, index) in customers"
            :key="index"
            :customer="customer"
          />
        </Slider> -->
      </div>
    </BaseSection>

    <BaseSection
      class="relative bg-white mt-16 px-16 py-12 flex items-center text-center md:flex-row flex-col justify-between w-full shadow-lg rounded-lg z-40"
    >
      <SeactionHeader
        title="Узнай, как работает современный бот для трейдинга на криптовалюте и как на этом можно зарабатывать"
      />
      <BaseButton>Перейти</BaseButton>
    </BaseSection>

    <footer class="relative -mt-24 pt-40 pb-20 bg-gray-100 w-xl z-10">
      <div class="container px-4 mx-auto flex items-center justify-center">
        <div class="max-w-sm flex-shrink-0">
          <div>
            <p class="mt-4 text-sm text-gray-600"></p>
          </div>

          <a href="" class=""><img alt=""/></a>
          <p class="mt-4 text-xs text-gray-600 leading-none tracking-wide">
            <span>©2022-</span>
            <span>Tradebot</span>
          </p>
        </div>

        <div class="flex justify-end max-w-xs">
          <List class="">
            <ListItem><BaseLink to="#"></BaseLink></ListItem>
            <ListItem><BaseLink to="#"></BaseLink></ListItem>
          </List>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import BaseSection from '@/components/BaseSection'
import HeroCard from '@/components/HeroCard'
import SeactionHeader from '@/components/SeactionHeader'
import List from '@/components/List'
import ListItem from '@/components/ListItem'
// import Slider from '@/components/Slider'
// import CustomerCard from '@/components/CustomerCard'
import BaseButton from '@/components/BaseButton'
import BaseLink from '@/components/BaseLink'

export default {
  name: 'Home',

  components: {
    BaseSection,
    HeroCard,
    SeactionHeader,
    List,
    ListItem,
    // Slider,
    // CustomerCard,
    BaseButton,
    BaseLink
  },

  data() {
    return {
      heroItems: [
        {
          title: 'Стабильность',
          subtitle: 'Поможем начать получать пассивный доход'
        },
        {
          title: 'Работайте на себя',
          subtitle: 'Увеличте доход без дополнительной трудозатрат'
        },
        {
          title: 'Владелец компании',
          subtitle: 'Увеличивай свой капитал'
        }
      ],
      // featuresList: [
      //   'Нет необходимости присутствия человека при совершении сделок',
      //   'Отсутствие человеческого фактора, а следовательно минимизация ошибок',
      //   'Круглосуточный мониторинг движений монет',
      //   'Возможность одновременного проведения большого количества сделок',
      //   'Чёткое распределение депозита по сделкам',
      //   'Нет необходимости постоянно держать страницу биржи открытой, поскольку бот работает через наши сервера',
      //   'Возможность наблюдения за работой бота в любое время',
      //   'Вся торговля ведётся на вашем аккаунте, без необходимости скачивать и устанавливать дополнительное ПО'
      // ],
      sliderOptions: { freeScroll: true, wrapAround: true, contain: true },
      customers: [
        {
          name: 'Anton M.',
          image: 'https://randomuser.me/api/portraits/men/42.jpg',
          location: 'Russia, Moscow',
          star: '4.8',
          quote:
            '“Большое спасибо за помощь! Мне все понравлось. Все понятно и благодарю за показ примера в реальном времени”.'
        },
        {
          name: 'Yulya S.',
          image: 'https://randomuser.me/api/portraits/women/84.jpg',
          location: 'Russia, Saint-P',
          star: '5',
          quote:
            '“Все понятно на обучении, хорошая идея для новичков. Благодарю!”.'
        },
        {
          name: 'Max P.',
          image: 'https://randomuser.me/api/portraits/men/64.jpg',
          location: 'Russia, Razan',
          star: '4.5',
          quote:
            '“Благодарю за помощь)) отдельное спасибо менеджерам, так как помогли разобраться в непонятных для меня моментах”.'
        }
      ]
    }
  }
}
</script>

<style scoped>
.bg {
  background-image: url('../assets/images/bg.svg');
}
</style>
