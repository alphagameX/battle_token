<template>
<div class="tutorial__slide">
    <global-logo />
    <div class="content" :class="{full: content == 'full'}">
        <slot></slot>
    </div>
</div>
</template>

<script>
import GlobalLogo from '../Global/GlobalLogo.vue'

export default {
    name: "TutorialModel",
    components: {
        GlobalLogo
    },
    props: ['parent', 'timeToInteract', 'content'],
    mounted() {
        let nextBtn = this.parent.$refs.next

        if (nextBtn != undefined) {
            setTimeout(() => {
                nextBtn.classList.add('bounce')
            }, (this.timeToInteract != undefined ? this.timeToInteract * 1000 : 3000))
        }
    }
}
</script>

<style lang="scss">
.tutorial__slide {
    box-shadow: 0px 0px 10px 7px #00000012;
    z-index: 2;
    background-color: white;
    border-radius: 20px;
    margin: 0 60px;
    height: 650px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;

    .logo__container {
        transform: scale(0.8);
        margin-top: 20px;

        h1 {
            color: black !important;
        }
    }

    .content {
        margin: auto 0;

        &.full {
            margin: unset;
            margin-bottom: auto;
            width: 100%;
        }

        .tuto__slide__register {
            margin-top: 25px;
            padding: 0 30px;

            h1 {
                font-weight: 600;
                font-size: 2rem;
            }

            .form {

                >p,
                h3 {
                    align-self: center;
                    font-size: 14px;
                    color: #aeafb0;
                }

                .group {
                    margin-top: 30px;

                    h3 {
                        text-align: center;
                    }

                    .cell {
                        margin-top: 15px;
                    }
                }

                .cell {
                    position: relative;
                    text-align: center;
                    margin-top: 30px;
                    display: grid;
                    grid-template-columns: repeat(2, minmax(0, 1fr));
                    column-gap: 20px;
                    row-gap: 20px;

                    @media(max-width: 560px) {
                        grid-template-columns: repeat(1, minmax(0, 1fr));
                    }

                    @media (max-width: 650px ) {
                        row-gap: 28px;
                    }

                    &.cell-3 {
                        grid-template-columns: repeat(3, minmax(0, 1fr));
                    }
                }

                .vs-input,
                .vs-select-content {
                    min-width: 100%;
                }

                .vs-radio-content {
                    border-radius: 12px;
                    padding: 5px 10px;
                    width: 100%;
                    background-color: #f4f7f8;

                    label {
                        color: #aeafb0;
                    }

                    &.flex {
                        border-radius: 0;
                        background: none;
                        padding: 0;
                        display: flex;
                        flex-direction: column;

                        img {
                            margin-top: 10px;
                            width: 100%;
                            height: 80px;
                            object-fit: cover;
                            border-radius: 12px;
                        }
                    }
                }

                .vs-input__message {
                    position: absolute;
                    bottom: -20px;
                    left: 0;
                }
            }
        }
    }

    @media (max-width: 650px) {
        margin: 0 20px;
        height: auto;
        min-height: 600px;
        padding-bottom: 20px;
    }
    
    @media(max-height: 700px) and (min-width: 850px) {
        margin-top: 40px;
    }
}
</style>
