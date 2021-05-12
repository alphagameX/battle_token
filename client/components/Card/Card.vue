<template>
    <div class="card">
        <div class="picture">
            <img :src="image"/>

            <div class="change">
                <slot name="change"></slot>
            </div>

            <div class="control">
                <button>
                    <i class="far fa-heart"></i>
                </button>
                <button>
                    <i class="far fa-comments"></i>
                    <span>{{comment}}</span>
                </button>
            </div>
        </div>

        <div class="content__bar">
            <h3>{{title}}</h3>
            <p>{{content}}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "Card",
    props: ['title', 'content', 'image', 'comment']
}
</script>

<style lang="scss" scoped>
    .card {
        user-select: none;
        box-shadow: 0px 0px 7px 3px #00000036;
        background-color: white;
        min-width: 350px;
        max-width: 350px;
        border-radius: 20px;
        .picture {
            position: relative;
            height: 350px;
            @media(max-width: 950px) {
                height: 165px;
            }
            img {
                pointer-events: none;
                width: 100%;
                height: 100%;
                object-fit: cover;
                border-radius: 20px;
            } 
            .control {
                bottom: 13px;
                left: 15px;
                position: absolute;
                display: flex;

                button {
                    display: flex;
                    align-items: center;
                    margin-right: 6px;
                    cursor: pointer;
                    transition: all 0.4s;
                    border: none;
                    padding: 8px;
                    border-radius: 10px;
                    background-color: white;
                    i {
                        font-size: 1.1rem;
                    }

                    &:hover {
                        transform: translateY(-5px);
                    }
                }
                button:first-child {
                    background-color: #ff4657;
                    i { color: white; }
                }
                button:last-child {
                    i { 
                        color: black; 
                        margin-right: 3px;
                    } 
                    span {
                        color: black;
                    }
                }
            }
            .change {
                top: 8px;
                right: 8px;
                position: absolute;
                button {
                    cursor: pointer;
                    margin-right: 10px;
                    background: none;
                    border: none;
                    outline: none;
                    color: white;
                    i {
                        transition: all 0.6s;
                        font-size: 1.6rem;
                        &:hover {
                            transform: scale(1.1);
                            color: rgb(160, 159, 159);
                        }
                    }
                }
            }
        }

        .content__bar {
            padding: 0 15px 15px 15px;
            background-color: #ffffff;
            border-bottom-left-radius: 20px;
            border-bottom-right-radius: 20px;
            h3 {
                padding: 10px 0 5px 0;
                font-size: 1.1rem;
                font-weight: 500;
                line-height: 1.25;
            }
            p {
                margin-top: 8px;
                line-height: 1.7;
                opacity: 0.7;
                font-size: 0.8rem;
            }
        }
    }
</style>