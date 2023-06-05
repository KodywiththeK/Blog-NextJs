import Hero from '@/components/Hero'
import React from 'react'

export default function AboutPage() {
  return (
    <>
      <Hero />
      <section className="mt-4 flex w-full flex-col items-center p-4">
        <p className="my-4 text-xl text-neutral-800 dark:text-neutral-200">
          <span>{'안녕하세요. '}</span>
          <b>{'프론트엔드 개발자 김동성(Kody) '}</b>
          <span>{'입니다.'}</span>
        </p>
        <ul className="flex w-full max-w-2xl flex-col rounded-xl bg-green-100 p-4 text-neutral-800 dark:prose-invert dark:text-neutral-200">
          <li className="flex">
            <div className="mr-2">{'•'}</div>
            <div>
              {'주로'} <b>{'리액트와 타입스크립트'}</b>를 활용해 개발을 진행합니다.
            </div>
          </li>
          <li className="flex">
            <div className="mr-2">{'•'}</div>
            <div>
              개발자로서 <b>꾸준히 성장</b>하고, 더 좋은 생각과 가치들로 스스로를 채우기 위해 노력합니다. 빠르게 변화하는 프론트엔드 개발 트렌드에 관심을 가지고, <b>변화에 적응하고 배우는 것</b>을 좋아합니다.
            </div>
          </li>
          <li className="flex">
            <div className="mr-2">{'•'}</div>
            <div>
              긍정적인 에너지를 가지고 <b>주도적으로 협업</b>하며, 빠르고 유연한 의사결정을 통해 팀원들과 <b>적극적으로 소통</b>합니다.
            </div>
          </li>
          <li className="flex">
            <div className="mr-2">{'•'}</div>
            <div>
              결국 사람들의 마음을 움직이는 것은 <b>인문학의 옷을 입은 좋은 기술</b>이라 생각합니다. <b>사람을 잘 이해하고 먼저 다가갈줄 아는 개발자</b>가 되기 위해 노력합니다.
            </div>
          </li>
        </ul>
        <div className="my-6 border-b-[0.5px] border-b-neutral-700 opacity-60 dark:border-b-neutral-200" />
        <h2 className="mb-4 font-serif text-[22px] font-bold text-black dark:text-white">Motivation</h2>
        <p className="mb-8 max-w-2xl rounded-xl bg-green-100 p-4">
          오늘날 프로그래밍은 일상에 침투하기 가장 좋은 수단입니다. 무언가 많은 사람들의 일상이 되면, 그것은 하나의 문화가 됩니다. 그것이 선한 문화라면 사람이 사람을 돕게되는 가장 자연스러운 방법일 것입니다. 결국 코딩이 전부가 아닌 그것이 미치는 영향까지 고려하여, <b>좋은 기술로서 선한 영향력을 만들어가는 것</b>이 제가 꿈꾸는 개발자로서의 삶입니다.
        </p>
        <h2 className="mb-4 font-serif text-[22px] font-bold text-black dark:text-white">Dev Skills</h2>
        <ul className="prose prose-neutral flex w-full max-w-2xl  flex-col gap-1 rounded-xl bg-green-100 p-4 text-neutral-800 dark:prose-invert dark:text-neutral-200">
          <li className="flex">
            <div className="mr-2">{'•'}</div>
            <div>HTML5, CSS</div>
          </li>
          <li className="flex">
            <div className="mr-2">{'•'}</div>
            <div>Javascript ES6+, TypeScript</div>
          </li>
          <li className="flex">
            <div className="mr-2">{'•'}</div>
            <div>React</div>
          </li>
          <li className="flex">
            <div className="mr-2">{'•'}</div>
            <div>Next.js</div>
          </li>
          <li className="flex">
            <div className="mr-2">{'•'}</div>
            <div>Redux, Recoil</div>
          </li>
          <li className="flex">
            <div className="mr-2">{'•'}</div>
            <div>SCSS, StyledComponent, TailwindCSS</div>
          </li>
        </ul>
      </section>
    </>
  )
}
