<template>
<div>
  <h1>Contact</h1>
  <div class="contents">
    <form class="contact" method="POST" name="contact" data-netlify="true">
      <input type="hidden" name="form-name" value="contact">
      <p>
        <label><span>Your Name</span><input type="text" name="name" /></label>
      </p>
      <p>
        <label><span>Your Email</span><input type="email" name="email" /></label>
      </p>
      <p>
        <label><span>Message</span><textarea name="message"></textarea></label>
      </p>
      <p class="center">
        <button class="submit" type="submit">Send</button>
      </p>
    </form>
  </div>
</div>
</template>

<style lang="scss" scoped>
p{
  &:not(:nth-last-of-type(-n+2)){
    margin-bottom: 30px;
  }
}
  label{
    display: flex;
    align-items: center;
    @include sp{
      flex-wrap: wrap;
    }
    span{
      display: block;
      width: 20%;
      margin-right: 0;
      font-family: $quick;
      font-weight: 400;
      @include sp{
        width: 100%;
      }
    }
    input,textarea{
      border-radius: 5px;
      background: #eee;
      flex: 1;
      padding: 10px 15px;
      border: none;
      outline: none;
      @include sp{
        flex: inherit;
        width: 100%;
      }
    }
  }
  .submit{
    background: $main-color;
    width: 240px;
    height: 60px;
    text-align: center;
    border-radius: 5px;
    color: #fff;
    margin: 60px auto 0;
    font-family: $quick;
    font-weight: 400;
    letter-spacing: .1em;
    transition: .5s;
    &:hover{
      background: #6c88ab;
      transition: .5s;
    }
    @include sp{
      margin: 40px auto 0;
    }
  }

</style>
