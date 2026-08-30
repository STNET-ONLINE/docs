---
layout: page
---
<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
  {
    avatar: 'https://github.com/VodkaNET.png',
    name: 'Dmitry',
    title: 'Гейм-дизайнер',
    links: [
      { icon: 'github', link: 'https://github.com/VodkaNET' },
      { icon: 'vk', link: 'https://vk.com/dapatenok' }
    ]
  },
  {
    avatar: 'https://github.com/hkuprin.png',
    name: 'Kuprin',
    title: 'Программист',
    links: [
      { icon: 'github', link: 'https://github.com/hkuprin' },
      { icon: 'vk', link: 'https://vk.com/kuprin1163' }
    ]
  },
  {
    avatar: 'https://github.com/Hozar2002.png',
    name: 'Hozar2002',
    title: 'Программист',
    links: [
      { icon: 'github', link: 'https://github.com/Hozar2002' },
      { icon: 'vk', link: 'https://vk.com/@stalker_hozar' }
    ]
  },
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      NET Online Team
    </template>
    <template #lead>
      Мы - команда разработчиков, специализирующаяся на создании игр и модов. Мы работаем уже более 5 лет, за это время мы выпустили несколько оригинальных проектов и представили ряд закрытых решений для игровых сообществ и партнерских инициатив.
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers :members />
</VPTeamPage>