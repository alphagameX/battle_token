<template>
<div class="features container">
    <div class="desc">
        <h3>Les modes de jeux</h3>
        <p>il y a 3 mode de jeux pour pour ce divertir sur @BattleToken, confrontation, supervisor et prognosis</p>
    </div>
    <div class="group">
        <div class="feature" :style="{backgroundImage: `url(${require('~/assets/footage/confrontation.jpeg')})`}">
            <div class="mode">
                <div class="badge">
                    <span>mode</span>
                </div>
                <h2>confrontation</h2>
            </div>

            <div class="discover">
                <button>
                    <i class="fas fa-plus"></i>
                </button>
            </div>
        </div>
        <div class="feature" :style="{backgroundImage: `url(${require('~/assets/footage/supervisor.jpeg')})`}">
            <div class="mode">
                <div class="badge">
                     <span>mode</span>
                     <span class="soon">soon</span>
                </div>
                <h2>supervisor</h2>
            </div>

            <div class="discover">
                <button class="disabled">
                    <i class="fas fa-plus"></i>
                </button>
            </div>
        </div>
        <div class="feature" :style="{backgroundImage: `url(${require('~/assets/footage/prognosis.jpeg')})`}">
            <div class="mode">
                <div class="badge">
                     <span>mode</span>
                     <span class="soon">soon</span>
                </div>
                <h2>prognosis</h2>
            </div>

            <div class="discover">
                <button class="disabled">
                    <i class="fas fa-plus"></i>
                </button>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "HomeFeature"
}
</script>

<style lang="scss" scoped>

   .features {
      width: auto;
      padding: 40px;
      display: flex;
      flex-direction: column;

      .desc {
         margin-bottom: 30px;

         h3 {
               font-weight: bold;
               font-size: 3rem;
         }
      }

      .group {
         display: grid;
         width: auto;
         grid-template-columns: repeat(3, minmax(0, 1fr));
         column-gap: 30px;
         row-gap: 30px;

         @media (max-width: $mobile_2) {
               grid-template-columns: repeat(1, auto);
         }

         .feature {
               border-radius: 20px;
               transition: all 0.6s;
               background-position: center;
               background-size: cover;
               background-repeat: no-repeat;
               display: flex;
               flex-direction: column;

               &:hover {
                  transform: scale(1.05);
               }

               .mode {
                  margin: 15px 0 0 15px;

                  .badge {
                     span {
                        width: fit-content;
                        border-radius: 20px;
                        background-color: white;
                        padding: 5px 10px;
                        font-size: 1rem;
                     }
                     .soon {
                        background-color: $color1;
                        color: white;
                     }
                  }

                  h2 {
                     text-transform: capitalize;
                     font-weight: bold;
                     color: white;
                     font-size: 2rem;
                  }
               }

               .discover {
                  margin-top: 50px;
                  display: grid;
                  grid-template-rows: repeat(2, auto);
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  justify-content: space-between;

                  button {
                     margin-bottom: 50px;
                     transition: all 0.6s;
                     display: flex;
                     align-items: center;
                     justify-content: center;
                     width: 70px;
                     height: 70px;
                     border: none;
                     border-radius: 50%;
                     cursor: pointer;

                     i {
                           transition: all 0.6s;
                           font-size: 2rem;
                           color: $color1;
                     }

                     &:not(.disabled):hover {
                           transform: scale(1.1);
                     }

                     &.disabled {
                        cursor: default;
                        filter: grayscale(1);
                     }
                  }
               }
         }
      }
   }
</style>
