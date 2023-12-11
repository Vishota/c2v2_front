<script setup lang="ts">
import './assets/about.css'
</script>
<template>
    <div class="frame-4">
        <div class="frame-5">
            <div class="text-wrapper-3">Найди свое призвание</div>
            <div class="text-wrapper-4">Например:</div>
            <div class="frame-6">
                <SeachSuggestion text="Программирование" />
                <SeachSuggestion text="Дизайн" />
                <SeachSuggestion text="Маркетинг" />
                <SeachSuggestion text="Тестирование" />
                <SeachSuggestion text="Психология" />
                <SeachSuggestion text="Английский язык" />
                <SeachSuggestion text="Бизнес-анализ" />
            </div>
            <CourseSearcher />
        </div>
        <div class="frame-11">
            <div class="text-wrapper-6"></div>
            <p class="text-wrapper-7">
                Качественный и оригинальный контент, проверенные преподаватели и
                справедливые цены
            </p>
            <div class="frame-12"></div>
            <To to="#aboutus" style="width: 100%;">
                <div class="frame-13">
                    <div class="text-wrapper-5">Узнать больше</div>
                </div>
            </To>
        </div>
    </div>
    <div class="frame-14">
        <div class="frame-15">
            <div class="text-wrapper-8">172</div>
            <div class="text-wrapper-7">преподавателя</div>
        </div>
        <div class="frame-15">
            <div class="text-wrapper-8">213</div>
            <div class="text-wrapper-7">курсов</div>
        </div>
        <div class="frame-15">
            <div class="text-wrapper-8">508</div>
            <div class="text-wrapper-7">обучающихся</div>
        </div>
    </div>
    <div class="frame-16">
        <div class="text-wrapper-6" id="aboutus">О нас</div>
        <p class="text-wrapper-7">
            Мы — команда энтузиастов, страстно убежденных в том, что
            образование является ключом к успеху и развитию. Наша миссия
            заключается в создании платформы, где студенты могут встретиться с
            квалифицированными и опытными преподавателями для получения
            высококачественного образования. Мы стремимся создать
            образовательное пространство, где знание не имеет границ.
        </p>
    </div>
    <div class="frame-17">
        <div class="text-wrapper-6">Почему мы?</div>
        <div class="frame-4">
            <div class="frame-18">
                <div class="text-wrapper-9">
                    Квалифицированные<br />преподаватели
                </div>
            </div>
            <p class="p">
                На нашей платформе вы встретите только опытных и экспертов в
                своей области преподавателей. Мы тщательно отбираем
                специалистов, готовых поделиться своим знанием и опытом и
                модерируем контент.
            </p>
        </div>
        <div class="frame-4">
            <div class="frame-18">
                <div class="text-wrapper-9">Разнообразие<br />курсов</div>
            </div>
            <p class="p">
                Наши преподаватели предлагают широкий спектр образовательных
                программ, охватывающих различные области знаний. Независимо от
                ваших интересов или карьерных целей, у нас есть курс для вас.
            </p>
        </div>
        <div class="frame-4">
            <div class="frame-18">
                <div class="text-wrapper-9">Гибкий график</div>
            </div>
            <p class="text-wrapper-10">
                Мы понимаем, что у каждого свой ритм жизни. Поэтому мы
                предоставляем гибкие графики занятий, чтобы обучение легко
                вписывалось в ваш повседневный график.
            </p>
        </div>
        <div class="frame-4">
            <div class="frame-18">
                <div class="text-wrapper-9">Интерактивное<br />обучение</div>
            </div>
            <p class="text-wrapper-10">
                Мы ставим перед собой задачу не только передать информацию, но и
                сделать процесс обучения увлекательным и интересным. Помимо
                теории, курсы включают в себя практические задания, тесты и
                многое другое.
            </p>
        </div>
        <div class="frame-4">
            <div class="frame-18">
                <div class="text-wrapper-9">Скидки и бонусы</div>
            </div>
            <p class="div-2">
                <span class="span">Постоянные клиенты нашей платформы
                    имеют возможность экономить за счет нашей программы
                    лояльности и специальных предложений.
                </span>
            </p>
        </div>
    </div>
    <div class="frame-16">
        <div class="text-wrapper-6">Хотите преподавать?</div>
        <div class="frame-19">
            <p class="div-3">
                У вас есть глубокие знания в своей области и вы готовы
                поделиться своим опытом с студентами?<br /><br />Приглашаем вас
                присоединиться к нашей команде преподавателей! Наши двери
                открыты для тех, кто стремится вдохновлять и формировать будущее
                через образование.
            </p>
            <div class="frame-20">
                <p class="text-wrapper-13">
                    Поделитесь информацией о вашем опыте и знаниях, и мы
                    рассмотрим вашу кандидатуру
                </p>
                <div class="frame-21"></div>
                <To to="/teachers/apply" style="width: 100%;">
                    <div class="frame-13">
                        <div class="text-wrapper-5">Заполнить форму</div>
                    </div>
                </To>
            </div>
        </div>
    </div>
    <div class="frame-16">
        <div class="text-wrapper-6">Возникли вопросы?</div>
        <div class="email-wrapper">
            <p class="div-3">
                <span class="text-wrapper-14">Свяжитесь с нами! Наши контакты:<br />Email:
                    vishotax3@gmail.com<br />Telegram:
                </span>
                <span class="text-wrapper-15">@vishota</span>
            </p>
        </div>
    </div>
</template>