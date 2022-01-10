<template>
  <div class="row">
    <div class="col-lg-12">
      <div class="page-header">
        <h1>Сервера</h1>
      </div>
      <div class="bs-component">
        <table class="table table-striped table-hover ">
          <thead>
            <tr>
              <th width="5%">Номер</th>
              <th width="37%">Наименование</th>
              <th width="15%">Тарифный план</th>
              <th width="15%">Действует до</th>
              <th width="10%">Стоимость</th>
              <th width="15%">Состояние</th>
              <th width="3%"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>#0552</td>
              <td>[WEB Proff]: mh00.net; 188.120.246.128</td>
              <td>Ежедневное списание</td>
              <td class="text-danger"><b>1 сентября 2014 года</b></td>
              <td>15 руб/сутки</td>
              <td class="text-danger"><b>Остановлен</b> <a href="#">(Код: #522)</a></td>
              <td>
                <div class="btn-group">
                    <a class="btn btn-primary btn-xs dropdown-toggle" data-toggle="dropdown" href="#">
                        <span class="caret"></span>
                    </a>
                    <ul class="dropdown-menu">
                      <li><a href="#">Подробнее</a></li>
                      <li><a href="#">Оплатить</a></li>
                      <li><a href="#">FAQ</a></li>
                      <li><a href="#">Поддержка</a></li>
                      <li><a href="#">Статистика</a></li>
                      <li class="divider"></li>
                      <li><a href="#">Отказаться</a></li>
                    </ul>
                </div>
              </td>
            </tr>
            <tr>
              <td>#0553</td>
              <td>[WEB Simple]: mh00.ru; 188.120.246.128</td>
              <td>Профессионал</td>
              <td>30 сентября 2014 года</td>
              <td>150 руб/мес</td>
              <td class="text-success">Активен</td>
              <td>
                <div class="btn-group">
                    <a class="btn btn-primary btn-xs dropdown-toggle" data-toggle="dropdown" href="#">
                        <span class="caret"></span>
                    </a>
                    <ul class="dropdown-menu">
                      <li><a href="#">Подробнее</a></li>
                      <li><a href="#">Оплатить</a></li>
                      <li><a href="#">FAQ</a></li>
                      <li><a href="#">Поддержка</a></li>
                      <li><a href="#">Статистика</a></li>
                      <li class="divider"></li>
                      <li><a href="#">Отказаться</a></li>
                    </ul>
                </div>
              </td>
            </tr>
            <tr>
              <td>#0652</td>
              <td>[MINECRAFT]: 188.120.246.128:7777; 150 слотов</td>
              <td>Ежедневное списание</td>
              <td class="text-warning">15 сентября 2014 года</td>
              <td>10 руб/сутки</td>
              <td class="text-warning">Активен <a href="#">(Код: #21)</a></td>
              <td>
                <div class="btn-group">
                    <a class="btn btn-primary btn-xs dropdown-toggle" data-toggle="dropdown" href="#">
                        <span class="caret"></span>
                    </a>
                    <ul class="dropdown-menu">
                      <li><a href="#">Подробнее</a></li>
                      <li><a href="#">Оплатить</a></li>
                      <li><a href="#">FAQ</a></li>
                      <li><a href="#">Поддержка</a></li>
                      <li><a href="#">Статистика</a></li>
                      <li class="divider"></li>
                      <li><a href="#">Отказаться</a></li>
                    </ul>
                </div>
              </td>
            </tr>
            <tr v-for="server in servers">
              <td>#0652</td>
              <td>{{ server.title }}</td>
              <td>{{ server.address }}</td>
              <td class="text-warning">15 сентября 2014 года</td>
              <td>{{ server.category }}</td>
              <td class="text-warning">Активен <a href="#">(Код: #21)</a></td>
              <td>
                <div class="btn-group">
                    <a class="btn btn-primary btn-xs dropdown-toggle" data-toggle="dropdown" href="#">
                        <span class="caret"></span>
                    </a>
                    <ul class="dropdown-menu">
                      <li><a href="#">Подробнее</a></li>
                      <li><a href="#">Оплатить</a></li>
                      <li><a href="#">FAQ</a></li>
                      <li><a href="#">Поддержка</a></li>
                      <li><a href="#">Статистика</a></li>
                      <li class="divider"></li>
                      <li><a href="#">Отказаться</a></li>
                    </ul>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      <span v-html="helly"></span>
      </div>
      <br />
      {{ gowasm }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import getServers from '../services/servers';

const helly = ref("Hi!")
const gowasm = ref('GOLAAAANG')
const servers = ref()

getServers().then((r) => {
  servers.value = r
  console.log(r)
})

</script>