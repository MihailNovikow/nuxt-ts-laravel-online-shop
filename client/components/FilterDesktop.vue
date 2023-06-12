<template>
    <div class="filter">
                <div class="filter__wrapper">
                    <h2>Цена, ₽</h2>
                    <div class="filter__block">
                        <div class="price__inputs">
                            <input
                                type="text"
                                placeholder=""
                                class="price__input"
                            />
                            <input
                                type="text"
                                placeholder=""
                                class="price__input"
                            />
                        </div>
                    </div>

                    <slider />
                    <div class="filter__block">
                        <h2>Цвет</h2>
                        <div class="list__item">
                            <input type="checkbox" name="" id="" />
                            <div class="color1"></div>
                            <p>RAL 8017</p>
                        </div>
                        <div class="list__item">
                            <input type="checkbox" name="" id="" />
                            <div class="color1"></div>
                            <p>RAL 7024</p>
                        </div>
                        <div class="list__item">
                            <input type="checkbox" name="" id="" />
                            <div class="color1"></div>
                            <p>RAL 3005</p>
                        </div>
                        <div class="list__item">
                            <input type="checkbox" name="" id="" />
                            <div class="color1"></div>
                            <p>RAL 6005</p>
                        </div>
                        <p @click="toggleShow" class="show-all">Показать все</p>
                        <div v-if="showAll === true"></div>
                    </div>
                    <div class="filter__block">
                        <h2>Толщина, м</h2>
                        <div class="list__item">
                            <input type="checkbox" name="" id="" />
                            <p>0,4</p>
                        </div>
                        <div class="list__item">
                            <input type="checkbox" name="" id="" />
                            <p>0,44</p>
                        </div>
                        <div class="list__item">
                            <input type="checkbox" name="" id="" />
                            <p>0,45</p>
                        </div>
                        <div class="list__item">
                            <input type="checkbox" name="" id="" />
                            <p>0,5</p>
                        </div>
                        <div class="list__item">
                            <input type="checkbox" name="" id="" />
                            <p>0,6</p>
                        </div>
                    </div>
                    <div class="filter__block">
                        <h2>Основа покрытия</h2>
                        <div class="list__item">
                            <input type="checkbox" name="" id="" />
                            <p>Полиуретан</p>
                        </div>
                        <div class="list__item">
                            <input type="checkbox" name="" id="" />
                            <p>Полиэстер</p>
                        </div>
                        <div class="list__item">
                            <input type="checkbox" name="" id="" />
                            <p>Полиэфир</p>
                        </div>
                    </div>
                    <div class="filter__block">
                        <h2>Покрытие</h2>
                        <div class="list__item">
                            <input type="checkbox" name="" id="" />
                            <p>Atlas</p>
                        </div>
                        <div class="list__item">
                            <input type="checkbox" name="" id="" />
                            <p>Drap</p>
                        </div>
                        <div class="list__item">
                            <input type="checkbox" name="" id="" />
                            <p>Drap ST</p>
                        </div>
                        <div class="list__item">
                            <input type="checkbox" name="" id="" />
                            <p>GreenCoat</p>
                        </div>
                        <div class="list__item">
                            <input type="checkbox" name="" id="" />
                            <p>Quarzit</p>
                        </div>
                        <p @click="toggleShow" class="show-all">Показать все</p>
                        <div v-if="showAll === true"></div>
                    </div>
                    <div class="filter__block">

                    </div>



                    <button class="btn-green">
                        Показать товаров: 1489
                    </button>
                    <button>
                        <img src="@/assets/img/exit.svg" alt="">
                        Сбросить фильтры
                    </button>
                </div>
            </div>
</template>
<script>
</script>
<style lang="scss">
.filter {
    width: 305px;
    height: 1633px;
    left: 320px;
    top: 260px;

    /* #FFFFFF */

    background: #ffffff;
    /* Drop Shadow */

    box-shadow: 0px 5px 20px rgba(34, 33, 33, 0.05);
    border-radius: 5px;
}
.filter__wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 20px;

    position: absolute;
    width: 255px;
    height: 1444px;
    left: 345px;
    top: 285px;
    h2 {
        font-family: "Inter";
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 22px;
        /* identical to box height, or 138% */

        display: flex;
        align-items: center;

        /* #25313F */

        color: #25313f;
    }
}
.filter__block {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 10px;
}
.price__title {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    padding: 0px;
    gap: 10px;

    width: 255px;
    height: 24px;
}
.price__inputs {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    padding: 0px;
    gap: 10px;

    width: 254px;
    height: 40px;
}
.price__input {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 10px 15px;
    gap: 5px;

    width: 122px;
    height: 40px;

    /* #FFFFFF */

    background: #ffffff;
    /* #D9DADC */

    border: 1px solid #d9dadc;
    border-radius: 5px;

    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    /* identical to box height, or 143% */

    display: flex;
    align-items: flex-end;

    /* #73767D */

    color: #73767d;
}
.slider {
    width: 255px;
    height: 20px;
}

.color__block {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 10px;

    width: 255px;
    height: 190px;
}

.color__block__item {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px;
    gap: 10px;

    width: 141px;
    height: 24px;
}

.checkbox {
    background: #ffffff;
    /* #D9DADC */

    border: 1px solid #d9dadc;
    border-radius: 5px;
    width: 20px;
    height: 20px;
}
.checkbox::before {
}
.checkbox::after {
}
.color1 {
    width: 30px;
    height: 20px;

    background: linear-gradient(0deg, #893447, #893447), #8cc63f;
    border-radius: 5px;
}
.color2 {
    width: 30px;
    height: 20px;

    background: linear-gradient(0deg, #611b2b, #611b2b), #8cc63f;
    border-radius: 5px;
}
.color3 {
    width: 30px;
    height: 20px;

    background: linear-gradient(0deg, #3e2127, #3e2127), #8cc63f;
    border-radius: 5px;
}
.color4 {
    width: 30px;
    height: 20px;

    background: linear-gradient(0deg, #38755f, #38755f), #8cc63f;
    border-radius: 5px;
}
p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    /* identical to box height, or 150% */

    display: flex;
    align-items: center;

    /* #4D4D4D */

    color: #4d4d4d;
}

.view-all {
    width: 96px;
    height: 20px;

    font-family: "Manrope";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    /* identical to box height, or 143% */

    display: flex;
    align-items: center;
    text-decoration-line: underline;

    /* #4D4D4D */

    color: #4d4d4d;
}
.width__block {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 10px;

    width: 255px;
    height: 194px;

    p {
        font-family: "Inter";
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        /* identical to box height, or 150% */

        display: flex;
        align-items: center;

        /* #4D4D4D */

        color: #4d4d4d;
    }
}
.coating_base_block {
}

.content {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(4, 1fr);
}
.content-item {
    display: flex;
    flex-direction: column;
}
.btn-green {
    display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 15px 40px;
gap: 10px;

position: absolute;
left: 17.97%;
right: 68.75%;
top: 70.16%;
bottom: 27.84%;

/* #8CC63F */

background: #8CC63F;
border-radius: 5px;

font-family: 'Inter';
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 20px;
/* identical to box height, or 143% */

display: flex;
align-items: center;
text-align: center;

/* #FFFFFF */

color: #FFFFFF;
}
.btn-gray {
    display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 15px 40px;
gap: 10px;

position: absolute;
left: 17.97%;
right: 68.75%;
top: 72.56%;
bottom: 25.28%;

/* #EDEEEF */

background: #EDEEEF;
border-radius: 5px;

width: 134px;
height: 20px;

/* 14/SemiBold */

font-family: 'Inter';
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 20px;
/* identical to box height, or 143% */

display: flex;
align-items: center;
text-align: center;

/* #73767D */

color: #73767D;
}
</style>