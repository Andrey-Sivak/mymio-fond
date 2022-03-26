<?php
$object = $args['object'];
$question = $object['question'];
$field_name = $object['name'];
$required = $object['required'];
$elmaName = $object['elma_name'];
$condition = $object['condition'];
$require_value = $condition['require_value'];

if (is_array($require_value)) {
    $require_value = implode('|,|', $require_value);
}
?>
<div class="contact-form__form-field"
    <?php if ($require_value) : ?>
        data-cond-dep-value="<?= $require_value; ?>"
    <?php endif;
    if ($condition['condition_dependency']) : ?>
        data-cond-dep-name="<?= $condition['condition_dependency']; ?>"
    <?php endif; ?>
>
    <p class="contact-form__form-field_note">Укажите конкретный участок гена</p>

    <div class="train">
        <div class="train__row">
      <span class="train__item one-out-rt">
          <span class="train__item_inner">1</span>
      </span>
            <span class="train__item two-in">
          <span class="train__item_inner">2</span>
      </span>
            <span class="train__item in-out-lt">
          <span class="train__item_inner">3</span>
      </span>
            <span class="train__item in-out-lt">
          <span class="train__item_inner">4</span>
      </span>
            <span class="train__item in-out-lt">
          <span class="train__item_inner">5</span>
      </span>
            <span class="train__item one-out-lt">
          <span class="train__item_inner">6</span>
      </span>
            <span class="train__item one-out-rt">
          <span class="train__item_inner">7</span>
      </span>
            <span class="train__item two-in">
          <span class="train__item_inner">8</span>
      </span>
            <span class="train__item in-out-lt">
          <span class="train__item_inner">9</span>
      </span>
            <span class="train__item in-out-lt">
          <span class="train__item_inner">10</span>
      </span>
            <span class="train__item one-out-lt">
          <span class="train__item_inner">11</span>
      </span>
            <span class="train__item one-in-rt">
          <span class="train__item_inner">12</span>
      </span>
            <span class="train__item in-out-lt">
          <span class="train__item_inner">13</span>
      </span>
            <span class="train__item in-out-lt">
          <span class="train__item_inner">14</span>
      </span>
        </div>
        <div class="train__row">
      <span class="train__item in-out-lt">
          <span class="train__item_inner">15</span>
      </span>
            <span class="train__item in-out-lt">
          <span class="train__item_inner">16</span>
      </span>
            <span class="train__item one-out-lt">
          <span class="train__item_inner">17</span>
      </span>
            <span class="train__item one-in-rt">
          <span class="train__item_inner">18</span>
      </span>
            <span class="train__item two-out">
          <span class="train__item_inner">19</span>
      </span>
            <span class="train__item two-in">
          <span class="train__item_inner">20</span>
      </span>
            <span class="train__item two-out">
          <span class="train__item_inner">21</span>
      </span>
            <span class="train__item two-in">
          <span class="train__item_inner">22</span>
      </span>
            <span class="train__item in-out-lt">
          <span class="train__item_inner">23</span>
      </span>
            <span class="train__item in-out-lt">
          <span class="train__item_inner">24</span>
      </span>
            <span class="train__item in-out-lt">
          <span class="train__item_inner">25</span>
      </span>
            <span class="train__item in-out-lt">
          <span class="train__item_inner">26</span>
      </span>
            <span class="train__item in-out-lt">
          <span class="train__item_inner">27</span>
      </span>
        </div>
        <div class="train__row">
      <span class="train__item in-out-lt">
          <span class="train__item_inner">28</span>
      </span>
            <span class="train__item in-out-lt">
          <span class="train__item_inner">29</span>
      </span>
            <span class="train__item in-out-lt">
          <span class="train__item_inner">30</span>
      </span>
            <span class="train__item in-out-lt">
          <span class="train__item_inner">31</span>
      </span>
            <span class="train__item in-out-lt">
          <span class="train__item_inner">32</span>
      </span>
            <span class="train__item in-out-lt">
          <span class="train__item_inner">33</span>
      </span>
            <span class="train__item in-out-lt">
          <span class="train__item_inner">34</span>
      </span>
            <span class="train__item in-out-lt">
          <span class="train__item_inner">35</span>
      </span>
            <span class="train__item in-out-lt">
          <span class="train__item_inner">36</span>
      </span>
            <span class="train__item in-out-lt">
          <span class="train__item_inner">37</span>
      </span>
            <span class="train__item in-out-lt">
          <span class="train__item_inner">38</span>
      </span>
            <span class="train__item in-out-lt">
          <span class="train__item_inner">39</span>
      </span>
            <span class="train__item in-out-lt">
          <span class="train__item_inner">40</span>
      </span>
        </div>
        <div class="train__row">
      <span class="train__item in-out-lt">
          <span class="train__item_inner">41</span>
      </span>
            <span class="train__item in-out-lt">
          <span class="train__item_inner">42</span>
      </span>
            <span class="train__item one-out-lt">
          <span class="train__item_inner">43</span>
      </span>
            <span class="train__item one-in-rt">
          <span class="train__item_inner">44</span>
      </span>
            <span class="train__item one-out-lt">
          <span class="train__item_inner">45</span>
      </span>
            <span class="train__item one-in-rt">
          <span class="train__item_inner">46</span>
      </span>
            <span class="train__item in-out-lt">
          <span class="train__item_inner">47</span>
      </span>
            <span class="train__item in-out-lt">
          <span class="train__item_inner">48</span>
      </span>
            <span class="train__item in-out-lt">
          <span class="train__item_inner">49</span>
      </span>
            <span class="train__item two-out">
          <span class="train__item_inner">50</span>
      </span>
            <span class="train__item two-in">
          <span class="train__item_inner">51</span>
      </span>
            <span class="train__item two-out">
          <span class="train__item_inner">52</span>
      </span>
            <span class="train__item two-in">
          <span class="train__item_inner">53</span>
      </span>
        </div>
        <div class="train__row">
      <span class="train__item one-out-lt">
          <span class="train__item_inner">54</span>
      </span>
            <span class="train__item one-in-rt">
          <span class="train__item_inner">55</span>
      </span>
            <span class="train__item one-out-lt">
          <span class="train__item_inner">56</span>
      </span>
            <span class="train__item one-in-rt">
          <span class="train__item_inner">57</span>
      </span>
            <span class="train__item two-out">
          <span class="train__item_inner">58</span>
      </span>
            <span class="train__item two-in">
          <span class="train__item_inner">59</span>
      </span>
            <span class="train__item in-out-lt">
          <span class="train__item_inner">60</span>
      </span>
            <span class="train__item two-out">
          <span class="train__item_inner">61</span>
      </span>
            <span class="train__item one-in-lt">
          <span class="train__item_inner">62</span>
      </span>
            <span class="train__item one-out-rt">
          <span class="train__item_inner">63</span>
      </span>
            <span class="train__item in-out-rt">
          <span class="train__item_inner">64</span>
      </span>
            <span class="train__item one-in-lt">
          <span class="train__item_inner">65</span>
      </span>
            <span class="train__item one-out-rt">
          <span class="train__item_inner">66</span>
      </span>
        </div>
        <div class="train__row">
      <span class="train__item two-in">
          <span class="train__item_inner">67</span>
      </span>
            <span class="train__item one-out-lt">
          <span class="train__item_inner">68</span>
      </span>
            <span class="train__item one-in-rt">
          <span class="train__item_inner">69</span>
      </span>
            <span class="train__item one-out-lt">
          <span class="train__item_inner">70</span>
      </span>
            <span class="train__item solid">
          <span class="train__item_inner">71</span>
      </span>
            <span class="train__item solid">
          <span class="train__item_inner">72</span>
      </span>
            <span class="train__item solid">
          <span class="train__item_inner">73</span>
      </span>
            <span class="train__item solid">
          <span class="train__item_inner">74</span>
      </span>
            <span class="train__item one-out-rt">
          <span class="train__item_inner">75</span>
      </span>
            <span class="train__item one-in-lt">
          <span class="train__item_inner">76</span>
      </span>
            <span class="train__item solid">
          <span class="train__item_inner">77</span>
      </span>
            <span class="train__item one-in-rt">
          <span class="train__item_inner">78</span>
      </span>
            <span class="train__item one-out-lt">
          <span class="train__item_inner">79</span>
      </span>
        </div>
    </div>

    <input type="hidden"
           class="train__hide-input"
        <?php if ($elmaName) : ?>
            data-elma="<?= $elmaName; ?>"
        <?php endif; ?>
        <?php if ($required) : ?>
            data-req="true"
        <?php endif; ?>
           name="<?= $field_name; ?>"
           id="<?= $field_name; ?>">
</div>