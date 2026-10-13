/**
 * Guialocal.com.gt - Identificador de operadora Claro / Tigo.
 *
 * Uso en WordPress:
 * 1. Instala o abre el plugin "Code Snippets" / "Fragmentos de código".
 * 2. Crea un nuevo fragmento PHP.
 * 3. Pega este código completo.
 * 4. Actívalo.
 * 5. En el artículo pega el shortcode: [identificador_operadora_gt]
 */

add_shortcode('identificador_operadora_gt', function () {
    $uid = 'tcgt-' . wp_generate_uuid4();

    ob_start();
    ?>
    <div id="<?php echo esc_attr($uid); ?>" class="tcgt-app" lang="es-GT">
      <style>
        #<?php echo esc_attr($uid); ?>{
          --tcgt-accent:#f9ce0b;
          --tcgt-ink:#171717;
          --tcgt-muted:#555555;
          --tcgt-line:#e7e7e7;
          --tcgt-soft:rgba(249,206,11,.14);
          color:var(--tcgt-ink);
          font-family:system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Arial,sans-serif;
          font-weight:400;
          line-height:1.5;
          margin:34px 0;
          max-width:100%;
        }
        #<?php echo esc_attr($uid); ?> *,#<?php echo esc_attr($uid); ?> *::before,#<?php echo esc_attr($uid); ?> *::after{box-sizing:border-box;}
        #<?php echo esc_attr($uid); ?> .tcgt-shell{background:#fff;border:1px solid var(--tcgt-line);border-radius:10px;overflow:hidden;}
        #<?php echo esc_attr($uid); ?> .tcgt-head{border-left:10px solid var(--tcgt-accent);padding:clamp(22px,4vw,34px);}
        #<?php echo esc_attr($uid); ?> .tcgt-kicker{align-items:center;background:var(--tcgt-soft);border-radius:999px;color:var(--tcgt-ink);display:inline-flex;font-size:13px;font-weight:850;line-height:1;margin:0 0 14px;min-height:30px;padding:0 12px;}
        #<?php echo esc_attr($uid); ?> h2,#<?php echo esc_attr($uid); ?> h3,#<?php echo esc_attr($uid); ?> p{margin:0;}
        #<?php echo esc_attr($uid); ?> h2{color:var(--tcgt-ink);font-size:clamp(30px,4.6vw,48px);font-weight:900;letter-spacing:0;line-height:1.1;max-width:920px;}
        #<?php echo esc_attr($uid); ?> .tcgt-sub{color:var(--tcgt-muted);font-size:clamp(16px,2vw,19px);line-height:1.7;margin-top:14px;max-width:920px;}
        #<?php echo esc_attr($uid); ?> .tcgt-form{border-top:1px solid var(--tcgt-line);display:grid;gap:18px;padding:clamp(18px,3vw,26px);}
        #<?php echo esc_attr($uid); ?> label{color:var(--tcgt-ink);display:block;font-size:15px;font-weight:850;margin-bottom:8px;}
        #<?php echo esc_attr($uid); ?> .tcgt-input-row{display:grid;gap:12px;grid-template-columns:minmax(0,1fr) auto;align-items:end;}
        #<?php echo esc_attr($uid); ?> .tcgt-input-wrap{position:relative;}
        #<?php echo esc_attr($uid); ?> input{background:#fff;border:1px solid var(--tcgt-line);border-radius:8px;color:var(--tcgt-ink);font:inherit;font-size:20px;font-weight:750;letter-spacing:.03em;min-height:62px;outline:0;padding:0 48px 0 16px;width:100%;}
        #<?php echo esc_attr($uid); ?> input:focus{border-color:var(--tcgt-accent);box-shadow:0 0 0 4px rgba(249,206,11,.22);}
        #<?php echo esc_attr($uid); ?> input::placeholder{color:#777;font-weight:500;letter-spacing:0;}
        #<?php echo esc_attr($uid); ?> .tcgt-clear{align-items:center;background:transparent;border:0;border-radius:50%;color:var(--tcgt-muted);cursor:pointer;display:none;font:inherit;font-size:26px;height:38px;justify-content:center;line-height:1;padding:0;position:absolute;right:8px;top:12px;width:38px;}
        #<?php echo esc_attr($uid); ?> .tcgt-clear:hover{background:var(--tcgt-soft);color:var(--tcgt-ink);}
        #<?php echo esc_attr($uid); ?> button{align-items:center;border:1px solid transparent;border-radius:8px;cursor:pointer;display:inline-flex;font:inherit;font-size:16px;font-weight:850;justify-content:center;min-height:62px;padding:0 20px;transition:background .16s,border-color .16s,transform .16s;}
        #<?php echo esc_attr($uid); ?> button:hover{transform:translateY(-1px);}
        #<?php echo esc_attr($uid); ?> button:active{transform:translateY(0);}
        #<?php echo esc_attr($uid); ?> .tcgt-primary{background:var(--tcgt-accent);border-color:#e2b900;color:var(--tcgt-ink);}
        #<?php echo esc_attr($uid); ?> .tcgt-secondary{background:#fff;border-color:var(--tcgt-line);color:var(--tcgt-ink);}
        #<?php echo esc_attr($uid); ?> .tcgt-hint{color:var(--tcgt-muted);font-size:13px;line-height:1.55;margin-top:8px;}
        #<?php echo esc_attr($uid); ?> .tcgt-examples{display:flex;flex-wrap:wrap;gap:9px;}
        #<?php echo esc_attr($uid); ?> .tcgt-chip{background:#fff;border:1px solid var(--tcgt-line);border-left:6px solid var(--tcgt-accent);border-radius:8px;color:var(--tcgt-ink);cursor:pointer;font-size:14px;font-weight:800;padding:10px 13px;transition:background .16s,border-color .16s,transform .16s;user-select:none;}
        #<?php echo esc_attr($uid); ?> .tcgt-chip:hover{background:var(--tcgt-accent);border-color:var(--tcgt-accent);transform:translateY(-1px);}
        #<?php echo esc_attr($uid); ?> .tcgt-error{border-left:6px solid #b00020;color:#b00020;display:none;font-size:14px;font-weight:750;line-height:1.5;padding:8px 0 8px 12px;}
        #<?php echo esc_attr($uid); ?> .tcgt-result{border-top:1px solid var(--tcgt-line);display:none;padding:clamp(18px,3vw,26px);}
        #<?php echo esc_attr($uid); ?> .tcgt-card{border:1px solid var(--tcgt-line);border-left:10px solid var(--tcgt-accent);border-radius:10px;display:grid;gap:18px;grid-template-columns:minmax(0,1fr) auto;padding:clamp(18px,3vw,26px);align-items:center;}
        #<?php echo esc_attr($uid); ?> .tcgt-company{color:var(--tcgt-ink);font-size:clamp(32px,5vw,58px);font-weight:950;letter-spacing:0;line-height:1;margin-top:6px;}
        #<?php echo esc_attr($uid); ?> .tcgt-status{color:var(--tcgt-muted);font-size:15px;font-weight:750;line-height:1.45;}
        #<?php echo esc_attr($uid); ?> .tcgt-prefix{background:var(--tcgt-accent);border:1px solid #e2b900;border-radius:10px;color:var(--tcgt-ink);display:grid;min-width:150px;padding:14px 16px;text-align:center;}
        #<?php echo esc_attr($uid); ?> .tcgt-prefix span{font-size:12px;font-weight:850;line-height:1.2;text-transform:uppercase;}
        #<?php echo esc_attr($uid); ?> .tcgt-prefix strong{font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;font-size:30px;font-weight:950;line-height:1.15;margin-top:4px;}
        #<?php echo esc_attr($uid); ?> .tcgt-note{color:var(--tcgt-muted);font-size:15px;line-height:1.65;margin-top:12px;}
        #<?php echo esc_attr($uid); ?> .tcgt-actions{display:flex;flex-wrap:wrap;gap:10px;margin-top:14px;}
        #<?php echo esc_attr($uid); ?> details{border-top:1px solid var(--tcgt-line);padding:18px clamp(18px,3vw,26px) clamp(20px,3vw,26px);}
        #<?php echo esc_attr($uid); ?> summary{cursor:pointer;font-size:18px;font-weight:900;list-style:none;}
        #<?php echo esc_attr($uid); ?> summary::-webkit-details-marker{display:none;}
        #<?php echo esc_attr($uid); ?> .tcgt-rules{display:grid;gap:8px;grid-template-columns:repeat(2,minmax(0,1fr));margin-top:14px;}
        #<?php echo esc_attr($uid); ?> .tcgt-rule{border:1px solid var(--tcgt-line);border-radius:8px;display:grid;gap:4px;padding:11px 12px;}
        #<?php echo esc_attr($uid); ?> .tcgt-rule strong{color:var(--tcgt-ink);font-size:14px;line-height:1.25;}
        #<?php echo esc_attr($uid); ?> .tcgt-rule span{color:var(--tcgt-muted);font-size:13px;line-height:1.35;}
        @media (max-width:720px){
          #<?php echo esc_attr($uid); ?>{margin:28px 0;}
          #<?php echo esc_attr($uid); ?> .tcgt-input-row,#<?php echo esc_attr($uid); ?> .tcgt-card,#<?php echo esc_attr($uid); ?> .tcgt-rules{grid-template-columns:1fr;}
          #<?php echo esc_attr($uid); ?> .tcgt-input-row button,#<?php echo esc_attr($uid); ?> .tcgt-actions button{width:100%;}
          #<?php echo esc_attr($uid); ?> .tcgt-prefix{min-width:0;}
        }
      </style>

      <div class="tcgt-shell">
        <div class="tcgt-head">
          <span class="tcgt-kicker">Guialocal Guatemala</span>
          <h2>¿Mi número es Claro o Tigo?</h2>
          <p class="tcgt-sub">Ingresa un número de teléfono de Guatemala y descubre a qué compañía pertenece según sus primeros 4 dígitos.</p>
        </div>

        <div class="tcgt-form">
          <div>
            <label for="<?php echo esc_attr($uid); ?>-phone">Número de teléfono</label>
            <div class="tcgt-input-row">
              <div class="tcgt-input-wrap">
                <input id="<?php echo esc_attr($uid); ?>-phone" class="tcgt-phone" type="tel" inputmode="numeric" autocomplete="tel" placeholder="Ej: 5512 3456 o +502 3229 0000">
                <button class="tcgt-clear" type="button" aria-label="Limpiar número">×</button>
              </div>
              <button class="tcgt-check tcgt-primary" type="button">Consultar compañía</button>
            </div>
            <p class="tcgt-hint">Puedes escribir el número con espacios, guiones o código de país +502. La herramienta usa los primeros 4 dígitos del número local.</p>
          </div>

          <div class="tcgt-examples" aria-label="Ejemplos rápidos">
            <span class="tcgt-chip" data-phone="3229 0000">3229 Claro</span>
            <span class="tcgt-chip" data-phone="3230 0000">3230 Tigo</span>
            <span class="tcgt-chip" data-phone="4476 0000">4476 Tigo</span>
            <span class="tcgt-chip" data-phone="4700 0000">4700 Claro</span>
            <span class="tcgt-chip" data-phone="5554 0000">5554 Claro</span>
            <span class="tcgt-chip" data-phone="5999 0000">5999 Tigo</span>
          </div>

          <div class="tcgt-error" role="alert"></div>
        </div>

        <div class="tcgt-result" aria-live="polite">
          <div class="tcgt-card">
            <div>
              <p class="tcgt-status">Resultado</p>
              <h3 class="tcgt-company">—</h3>
              <p class="tcgt-note"></p>
              <div class="tcgt-actions">
                <button class="tcgt-copy tcgt-secondary" type="button">Copiar resultado</button>
              </div>
            </div>
            <div class="tcgt-prefix">
              <span>Primeros 4 dígitos</span>
              <strong class="tcgt-prefix-value">—</strong>
            </div>
          </div>
        </div>

        <details>
          <summary>Ver reglas usadas por la calculadora</summary>
          <div class="tcgt-rules"></div>
        </details>
      </div>

      <script>
        (function(){
          var app = document.getElementById(<?php echo wp_json_encode($uid); ?>);
          if (!app || app.dataset.tcgtReady === 'true') return;
          app.dataset.tcgtReady = 'true';

          var rules = [
            [3000,3099,'Tigo','Antes: Comcel'],[3100,3199,'Tigo',''],[3200,3228,'Tigo',''],[3229,3229,'Claro',''],[3230,3299,'Tigo',''],[3300,3359,'Tigo',''],
            [3400,3499,'Claro','Antes: Movistar'],[3500,3564,'Claro','Antes: Movistar'],[4000,4099,'Tigo',''],[4100,4199,'Claro','PCS Digital'],[4200,4299,'Claro',''],
            [4300,4399,'Claro','Antes: Movistar'],[4400,4475,'Claro','Antes: Movistar'],[4476,4699,'Tigo',''],[4700,4772,'Claro',''],[4773,4799,'Tigo',''],
            [4800,4819,'Tigo',''],[4820,4899,'Tigo',''],[4900,4999,'Tigo',''],[5000,5009,'Tigo',''],[5010,5019,'Claro',''],[5020,5029,'Claro','Antes: Movistar'],
            [5030,5069,'Tigo',''],[5070,5099,'Claro','Antes: Movistar'],[5100,5109,'Claro','Antes: Movistar'],[5110,5139,'Claro',''],[5140,5149,'Claro','Antes: Movistar'],
            [5150,5199,'Tigo',''],[5200,5209,'Tigo',''],[5210,5299,'Claro','Antes: Movistar'],[5300,5309,'Tigo',''],[5310,5311,'Claro',''],[5312,5313,'Claro','Antes: Movistar'],
            [5314,5389,'Tigo',''],[5390,5399,'Claro','Antes: Movistar'],[5400,5409,'Claro','Antes: Movistar'],[5410,5499,'Claro',''],[5500,5509,'Claro','Antes: Movistar'],
            [5510,5517,'Claro',''],[5518,5519,'Claro','Antes: Movistar'],[5520,5529,'Tigo',''],[5530,5539,'Claro',''],[5540,5542,'Claro','Antes: Movistar'],[5543,5544,'Claro',''],
            [5545,5549,'Claro','Antes: Movistar'],[5550,5553,'Tigo',''],[5554,5579,'Claro',''],[5580,5581,'Tigo',''],[5582,5599,'Claro',''],[5600,5609,'Claro','Antes: Movistar'],
            [5610,5639,'Claro',''],[5640,5689,'Claro','Antes: Movistar'],[5690,5699,'Claro',''],[5700,5709,'Tigo',''],[5710,5718,'Claro',''],[5719,5789,'Tigo',''],
            [5790,5799,'Claro','Antes: Movistar'],[5800,5809,'Tigo',''],[5810,5818,'Claro',''],[5819,5819,'Tigo',''],[5820,5879,'Claro',''],[5880,5899,'Tigo',''],
            [5900,5909,'Tigo',''],[5910,5914,'Claro',''],[5915,5917,'Claro','Antes: Movistar'],[5918,5919,'Tigo',''],[5920,5989,'Claro',''],[5990,5999,'Tigo','']
          ];

          function q(selector){ return app.querySelector(selector); }
          function digits(value){ return String(value || '').replace(/\D/g, ''); }
          function localDigits(value){
            var d = digits(value);
            if (d.length > 8 && d.indexOf('502') === 0) d = d.slice(3);
            return d;
          }
          function rangeText(rule){ return rule[0] === rule[1] ? String(rule[0]) : rule[0] + ' al ' + rule[1]; }
          function findCompany(value){
            var d = localDigits(value);
            if (d.length < 4) return { error:'Ingresa al menos los primeros 4 dígitos del número.' };
            var prefixText = d.slice(0, 4);
            var prefix = Number(prefixText);
            for (var i = 0; i < rules.length; i++) {
              if (prefix >= rules[i][0] && prefix <= rules[i][1]) {
                return { digits:d, prefixText:prefixText, rule:rules[i], company:rules[i][2], note:rules[i][3] || '' };
              }
            }
            return { digits:d, prefixText:prefixText, company:'No identificado', note:'No encontramos este prefijo en la tabla de reglas disponible. Revisa que sea un número móvil de Guatemala o consulta con tu operador.' };
          }
          function showError(message){
            q('.tcgt-error').textContent = message;
            q('.tcgt-error').style.display = 'block';
          }
          function renderResult(result){
            var warning = result.digits && result.digits.length !== 8 ? ' El número local normalmente tiene 8 dígitos; se usaron los primeros 4 para identificar la compañía.' : '';
            q('.tcgt-prefix-value').textContent = result.prefixText || '—';
            q('.tcgt-company').textContent = result.company;
            q('.tcgt-status').textContent = result.company === 'No identificado' ? 'No se encontró una coincidencia exacta' : 'Este número pertenece a ' + result.company;
            if (result.rule) {
              var legacy = result.note ? ' (' + result.note + ')' : '';
              q('.tcgt-note').textContent = 'Regla aplicada: prefijo ' + rangeText(result.rule) + ' → ' + result.company + legacy + '.' + warning;
            } else {
              q('.tcgt-note').textContent = result.note;
            }
            q('.tcgt-result').style.display = 'block';
            q('.tcgt-error').style.display = 'none';
          }
          function checkNumber(){
            var result = findCompany(q('.tcgt-phone').value);
            if (result.error) {
              showError(result.error);
              q('.tcgt-result').style.display = 'none';
              return;
            }
            renderResult(result);
          }
          function renderRules(){
            q('.tcgt-rules').innerHTML = rules.map(function(rule){
              var note = rule[3] ? ' · ' + rule[3] : '';
              return '<div class="tcgt-rule"><strong>' + rangeText(rule) + '</strong><span>' + rule[2] + note + '</span></div>';
            }).join('');
          }

          q('.tcgt-check').addEventListener('click', checkNumber);
          q('.tcgt-phone').addEventListener('input', function(){
            q('.tcgt-clear').style.display = q('.tcgt-phone').value ? 'inline-flex' : 'none';
            q('.tcgt-error').style.display = 'none';
          });
          q('.tcgt-phone').addEventListener('keydown', function(event){
            if (event.key === 'Enter') checkNumber();
          });
          q('.tcgt-clear').addEventListener('click', function(){
            q('.tcgt-phone').value = '';
            q('.tcgt-clear').style.display = 'none';
            q('.tcgt-result').style.display = 'none';
            q('.tcgt-error').style.display = 'none';
            q('.tcgt-phone').focus();
          });
          app.querySelectorAll('.tcgt-chip').forEach(function(chip){
            chip.addEventListener('click', function(){
              q('.tcgt-phone').value = chip.getAttribute('data-phone');
              q('.tcgt-clear').style.display = 'inline-flex';
              checkNumber();
            });
          });
          q('.tcgt-copy').addEventListener('click', function(){
            var text = [
              'Identificador de compañía telefónica - Guialocal.com.gt',
              'Prefijo: ' + q('.tcgt-prefix-value').textContent,
              'Resultado: ' + q('.tcgt-company').textContent,
              q('.tcgt-note').textContent
            ].join('\n');
            if (navigator.clipboard && navigator.clipboard.writeText) {
              navigator.clipboard.writeText(text).then(function(){
                q('.tcgt-copy').textContent = 'Resultado copiado';
                setTimeout(function(){ q('.tcgt-copy').textContent = 'Copiar resultado'; }, 1500);
              }).catch(function(){ showError('No se pudo copiar automáticamente. Puedes seleccionar el resultado y copiarlo manualmente.'); });
            } else {
              showError('Tu navegador no permitió copiar automáticamente. Puedes seleccionar el resultado y copiarlo manualmente.');
            }
          });
          renderRules();
        })();
      </script>
    </div>
    <?php
    return ob_get_clean();
});
