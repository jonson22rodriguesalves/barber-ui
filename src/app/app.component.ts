/**
 * Componente Raiz - Componente principal que serve como ponto de entrada da aplicação
 * Gerencia mudanças de rota e controla o título da aplicação
 */
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter, map, Subscription } from 'rxjs';
import { CardHeaderComponent } from './commons/components/card-header/card-header.component';
import { MenuBarComponent } from './commons/components/menu-bar/menu-bar.component';

@Component({
  selector: 'app-root', // Seletor do componente raiz
  standalone: true,    // Componente do tipo standalone (indicado pelo array de imports)
  imports: [RouterOutlet, CardHeaderComponent, MenuBarComponent], // Componentes importados
  templateUrl: './app.component.html', // Arquivo de template principal
  styleUrl: './app.component.scss'     // Estilos específicos do componente
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'barber-shop-ui'; // Título padrão da aplicação

  private routeSubscription?: Subscription; // Subscription para gerenciar eventos do roteador

  constructor(
    private readonly router: Router,          // Serviço de roteamento do Angular
    private readonly activatedRoute: ActivatedRoute // Rota atualmente ativa
  ) { }

  /**
   * Hook de ciclo de vida - Limpa as subscriptions quando o componente é destruído
   * Previne vazamentos de memória
   */
  ngOnDestroy(): void {
    if (this.routeSubscription) {
      this.routeSubscription.unsubscribe(); // Cancela a subscription de forma segura
    }
  }

  /**
   * Hook de ciclo de vida - Inicializa o componente
   * Configura a subscription para eventos de rota e atualiza o título da página
   */
  ngOnInit(): void {
    this.routeSubscription = this.router.events.pipe(
      // Filtra apenas eventos NavigationEnd (quando a mudança de rota é concluída)
      filter(event => event instanceof NavigationEnd),
      // Mapeia para obter o título da rota ativada
      map(() => this.getRouteTitle(this.activatedRoute))
    ).subscribe(title => this.title = title); // Atualiza o título do componente
  }

  /**
   * Método auxiliar para extrair título dos dados da rota
   * @param route - Rota atualmente ativa
   * @returns O título dos dados da rota ou um título padrão
   */
  private getRouteTitle(route: ActivatedRoute): string {
    let child = route;
    // Navega por todas as rotas filhas para encontrar a rota ativada mais profunda
    while (child.firstChild) {
      child = child.firstChild;
    }
    // Retorna o título dos dados da rota ou um valor padrão
    return child.snapshot.data['title'] || 'Default Title';
  }
}