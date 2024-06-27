import TextExpander from "./components/TextExpander";

export default function App() {
  return (
    <div>
      <TextExpander>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex nam eum a!
        Autem sapiente corporis delectus vitae placeat non fugiat omnis eum
        consequuntur enim earum tenetur recusandae, accusantium aspernatur
        eaque, labore quibusdam qui optio veritatis. Architecto beatae eaque
        quam, dolorem sapiente unde odit doloribus at quia molestiae?
        Voluptatibus, excepturi sint.
      </TextExpander>

      <TextExpander
        showHideColor="orangered"
        wordsNum={50}
        showTxt="Show Text"
        hideTxt="Collapse Text"
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat
        inventore obcaecati a eum ipsam reprehenderit exercitationem? Excepturi,
        adipisci placeat. Enim repellendus blanditiis voluptatem molestias
        provident aliquam amet non laborum facere id ratione quas doloremque
        pariatur, cupiditate ad fugiat dolor nesciunt laboriosam praesentium
        vitae autem in tempora. Voluptates rerum, repellat, accusantium
        inventore dignissimos eos, quisquam doloribus consequuntur deserunt sunt
        id. Porro nostrum atque maiores corrupti numquam sed, enim, dignissimos
        eum temporibus saepe quaerat? Facilis, perferendis excepturi! Sapiente
        porro error velit incidunt, vitae labore facilis dolor officia culpa
        reiciendis accusamus voluptates sequi eligendi voluptatum corporis
        distinctio sint deleniti nesciunt maxime rerum hic, voluptate
        perferendis tempora. Cumque quos quasi porro, esse alias dolor sequi rem
        tempora totam nam saepe exercitationem ad itaque sint nulla. At
        assumenda eveniet quidem iusto, cupiditate, maxime, placeat facere in
        delectus libero quis deserunt! Repellat itaque, modi accusamus a iusto
        iure, error totam nulla soluta, nam dolorem ratione. Accusantium
        mollitia at, nobis hic aperiam quisquam dicta. Cumque expedita soluta
        eius a enim suscipit repudiandae aut cum odio autem ad qui recusandae
        officia velit, vel reprehenderit at nostrum dolor illum dolorem!
        Necessitatibus in dolores consequuntur reprehenderit sunt quod tenetur
        doloribus earum optio minima enim harum aspernatur eligendi,
        perspiciatis mollitia asperiores?
      </TextExpander>

      <TextExpander className="bordered">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium autem ex non vero molestias, nobis nesciunt doloribus minus, nam aut, sed ipsum ipsa ad quia rem eligendi tenetur molestiae distinctio pariatur perspiciatis excepturi. Iusto minus tempore officiis doloremque. Molestias placeat nisi fuga delectus cum sint dolores! Maxime possimus deserunt id? Nam maiores voluptas dolorum assumenda ad, delectus libero velit repellat possimus, quas consequatur! Quibusdam repellat dignissimos obcaecati quis porro autem eveniet eum quod eligendi. Modi ullam quam, sint neque perferendis saepe pariatur vel excepturi placeat voluptatibus enim est eos architecto porro hic corporis eaque autem dolor. Tempore incidunt esse laudantium.
      </TextExpander>
    </div>
  );
}
