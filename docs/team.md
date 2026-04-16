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
    title: 'Game Designer',
    links: [
      { icon: 'github', link: 'https://github.com/VodkaNET' },
      { icon: 'vk', link: 'https://vk.com/dapatenok' }
    ]
  },
  {
    avatar: 'https://github.com/hkuprin.png',
    name: 'Kuprin',
    title: 'Programmer',
    links: [
      { icon: 'github', link: 'https://github.com/hkuprin' },
      { icon: 'vk', link: 'https://vk.com/kuprin1163' }
    ]
  },
  {
    avatar: 'https://github.com/Hozar2002.png',
    name: 'Hozar2002',
    title: 'Programmer',
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
      We are a team of developers specializing in game and mod creation. We've been active for over 5 years, during which we've released several original projects and delivered a number of closed-case solutions for gaming communities and partner initiatives.
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers :members />
</VPTeamPage>